import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {hero} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';

function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Nearest Cinema, Newest Movie,</Text>
      <Text style={styles.title}>Find out now!</Text>

      <Gap height={64} />
      <View style={{alignItems: 'center'}}>
        <Image style={styles.image} source={hero} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 57,
    paddingBottom: 160,
    paddingHorizontal: 24,
  },
  title: {
    color: colors.primary,
    fontSize: 38,
    lineHeight: 50,
    fontWeight: '700',
  },
  desc: {
    fontSize: 14,
    color: colors.third,
    lineHeight: 17,
  },
  image: {
    width: 327,
    height: 372,
  },
});

export default Hero;
