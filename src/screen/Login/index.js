import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Login({navigation}) {
  const handleLogin = () => {
    navigation.navigate('AppNavigator', {
      screen: 'Home',
      params: {
        nama: 'Walid',
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
