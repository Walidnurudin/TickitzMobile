import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, Input, Gap, MsgResponse} from '../../../components/atoms';
import {colors} from '../../../utils/colors';
import {tickitz} from '../../../assets/images';

function ForgotPassword({navigation}) {
  const [response, setResponse] = useState({
    msg: '',
    isSuccess: true,
    isShow: false,
  });
  const handleReset = () => {
    navigation.navigate('AppNavigator', {screen: 'Home'});
  };

  return (
    <View style={styles.container}>
      <Image source={tickitz} style={styles.logo} />
      <Gap height={46} />
      <Text style={styles.title}>Forgot password</Text>
      <Text style={styles.desc}>we'll send a link to your email shortly</Text>
      <Gap height={41} />
      <Input label="Email" placeholder="Write your email" />
      <Gap height={40} />
      {response.isShow && (
        <MsgResponse msg={response.msg} isSuccess={response.isSuccess} />
      )}
      <Button title="Activate Now" isLoading={false} onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 24,
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
    marginTop: 10,
    color: colors.third,
  },
});

export default ForgotPassword;
