import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {def} from '../../../assets/images';

function MovieDesc() {
  return (
    <View>
      <Image style={styles.image} source={def} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 159,
    height: 244,
  },
  title: {},
  desc: {},
});

export default MovieDesc;
