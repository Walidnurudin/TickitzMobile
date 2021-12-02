import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function MovieDesc() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image style={styles.image} source={def} />
      </View>

      <View style={{alignItems: 'center', marginVertical: 32}}>
        <Text style={styles.title}>Spider-Man: Homecoming</Text>
        <Text style={styles.subTitle}>Adventure, Action, Sci-Fi</Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 22}}>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Release date</Text>
          <Text style={styles.main}>June 28, 2017</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Directed by</Text>
          <Text style={styles.main}>Jon Watss</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Duration</Text>
          <Text style={styles.main}>2 hrs 13 min</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Casts</Text>
          <Text style={styles.main}>Tom Holland, Robert Downey Jr., etc.</Text>
        </View>
      </View>

      <View
        style={{paddingTop: 24, borderTopColor: '#D6D8E7', borderTopWidth: 1}}>
        <Text style={styles.synopsis}>Synopsis</Text>
        <Text style={styles.desc}>
          Thrilled by his experience with the Avengers, Peter returns home,
          where he lives with his Aunt May, under the watchful eye of his new
          mentor Tony Stark, Peter tries to fall back into his normal daily
          routine - distracted by thoughts of proving himself to be more than
          just your friendly neighborhood Spider-Man - but when the Vulture
          emerges as a new villain, everything that Peter holds most important
          will be threatened.{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 37,
    paddingHorizontal: 24,
    paddingBottom: 56,
  },
  image: {
    width: 159,
    height: 244,
  },
  wrapImage: {
    justifyContent: 'center',
    padding: 32,
    backgroundColor: 'red',
    borderColor: '#dedede',
    borderWidth: 3,
    borderRadius: 6,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,
    color: colors.black,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 32,
    color: colors.secondary,
    marginTop: 8,
  },
  head: {
    color: colors.third,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 22,
  },
  main: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: colors.black,
  },
  synopsis: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 16,
  },
  desc: {
    color: colors.secondary,
    lineHeight: 22,
    fontWeight: '400',
  },
});

export default MovieDesc;
