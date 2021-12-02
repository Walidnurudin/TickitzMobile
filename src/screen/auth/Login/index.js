import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Button, Input, Gap, MsgResponse} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import {tickitz} from '../../../assets/images';
// import axios from '../../../utils/axios';

function Login({navigation}) {
  const [response, setResponse] = useState({
    msg: '',
    isSuccess: true,
    isShow: false,
  });
  const handleLogin = () => {
    navigation.navigate('AppNavigator', {screen: 'Home'});
    // axios
    //   .get('/users')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={tickitz} style={styles.logo} />
      <Gap height={46} />
      <Text style={styles.title}>Sign In</Text>
      <Gap height={41} />
      <Input label="Email" placeholder="Write your email" />
      <Gap height={25} />
      <Input
        label="Password"
        placeholder="Write your password"
        isPassword={true}
      />
      <Gap height={40} />
      {response.isShow && (
        <MsgResponse msg={response.msg} isSuccess={response.isSuccess} />
      )}
      <Button title="Sign In" isLoading={false} onPress={handleLogin} />
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
