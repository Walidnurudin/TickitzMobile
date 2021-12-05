import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Button, Input, Gap, MsgResponse} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import {tickitz} from '../../../assets/images';
import axios from '../../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}) {
  const [data, setData] = useState({
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

  const handleLogin = () => {
    setResponse({
      ...response,
      isLoadingButton: true,
    });

    axios
      .post('/auth/login', data)
      .then(res => {
        AsyncStorage.setItem('token', res.data.data.token);
        navigation.navigate('AppNavigator', {screen: 'Home'});
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
      <Image source={tickitz} style={styles.logo} />
      <Gap height={46} />
      <Text style={styles.title}>Sign In</Text>
      <Gap height={41} />
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
        title="Sign In"
        isLoading={response.isLoadingButton}
        onPress={handleLogin}
      />
      <Gap height={32} />
      <Text style={styles.desc}>
        Forgot your password?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Reset now
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
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

export default Login;
