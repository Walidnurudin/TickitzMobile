import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input, Gap} from '../../../components/atoms';
import {colors} from '../../../utils/colors';

function Login({navigation}) {
  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input label="Email" placeholder="Write your email" />
      <Input
        label="Password"
        placeholder="Write your password"
        isPassword={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    lineHeight: 31,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default Login;
