import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {tickitzWhite} from '../../assets/images';
import {colors} from '../../utils/colors';

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
