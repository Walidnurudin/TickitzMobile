import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Splash(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppNavigator');
      } else {
        props.navigation.navigate('AuthNavigator');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
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

export default Splash;
