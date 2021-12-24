import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Button, Input, Gap, MsgResponse} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import {tickitz} from '../../../assets/images';
import axios from '../../../utils/axios';

function Register({navigation}) {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [response, setResponse] = useState({
    msg: '',
    isSuccess: true,
    isShow: false,

    // button
    isLoadingButton: false,
  });
  const handleInput = (value, field) => {
    setData({...data, [field]: value});
  };

  const handleRegister = () => {
    setResponse({
      ...response,
      isLoadingButton: true,
    });

    axios
      .post('/auth/register', data)
      .then(res => {
        alert(res.data.msg);
        navigation.navigate('Login');
        setResponse({
          ...response,
          isLoadingButton: false,
        });
      })
      .catch(err => {
        setResponse({
          isSuccess: false,
          isShow: true,
          msg: err.response.data.msg,
          isLoadingButton: false,
        });

        setTimeout(() => {
          setResponse({
            ...response,
            isShow: false,
            msg: '',
          });
        }, 3000);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Gap height={54} />
      <Image source={tickitz} style={styles.logo} />
      <Gap height={46} />
      <Text style={styles.title}>Sign Up</Text>
      <Gap height={41} />
      <Input
        label="First name"
        placeholder="Write your email firstname"
        onChange={value => handleInput(value, 'firstName')}
      />
      <Gap height={25} />
      <Input
        label="Last name"
        placeholder="Write your lastname"
        onChange={value => handleInput(value, 'lastName')}
      />
      <Gap height={25} />
      <Input
        label="Email"
        placeholder="Write your email"
        onChange={value => handleInput(value, 'email')}
      />
      <Gap height={25} />
      <Input
        label="Password"
        placeholder="Write your password"
        isPassword={true}
        onChange={value => handleInput(value, 'password')}
      />
      <Gap height={40} />
      {response.isShow && (
        <MsgResponse msg={response.msg} isSuccess={response.isSuccess} />
      )}
      <Button
        title="Join for free"
        isLoading={response.isLoadingButton}
        onPress={handleRegister}
      />
      <Gap height={32} />
      <Text style={styles.desc}>
        Do you already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Log in
        </Text>
      </Text>

      <Gap height={54} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  logo: {
    width: 78,
    height: 20,
  },
  title: {
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '600',
    color: colors.black,
  },
  desc: {
    textAlign: 'center',
  },
  link: {
    color: colors.primary,
  },
});

export default Register;
