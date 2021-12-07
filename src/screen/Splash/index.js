import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {tickitzWhite} from '../../assets/images';
import {colors} from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash(props) {
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('TOKEN', token);
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppNavigator');
      } else {
        props.navigation.navigate('AuthNavigator');
      }
    }, 3000);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={tickitzWhite} style={styles.image} />
      </View>
      <Text style={styles.title}>wait, watch, wow!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  wrapImage: {
    // width: 150,
    // height: 150,
    // resizeMode: 'contain',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 58,
    color: 'white',
  },
});

export default Splash;
