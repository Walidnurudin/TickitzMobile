import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import {URL_BACKEND} from '@env';

function MovieDesc({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image
          style={styles.image}
          source={
            data.image
              ? // ? `${URL_BACKEND}/uploads/movie/${data.image}`
                {
                  uri: `${URL_BACKEND}/uploads/movie/${data.image}`,
                  // uri: `http://192.168.43.155:3001/uploads/movie/${data.image}`,
                }
              : def
          }
        />
      </View>

      <View style={{alignItems: 'center', marginVertical: 32}}>
        <Text style={styles.title}>{data.name || '-'}</Text>
        <Text style={styles.subTitle}>{data.category || '-'}</Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 22}}>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Release date</Text>
          <Text style={styles.main}>{data.releaseDate || '-'}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Directed by</Text>
          <Text style={styles.main}>{data.director || '-'}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Duration</Text>
          <Text style={styles.main}>{data.duration || '-'}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.head}>Casts</Text>
          <Text style={styles.main}>{data.cast || '-'}</Text>
        </View>
      </View>

      <View
        style={{paddingTop: 24, borderTopColor: '#D6D8E7', borderTopWidth: 1}}>
        <Text style={styles.synopsis}>Synopsis</Text>
        <Text style={styles.desc}>{data.synopsis || '-'}</Text>
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
    padding: 32,
    marginHorizontal: 65,
    // backgroundColor: 'red',
    borderColor: '#dedede',
    borderWidth: 3,
    borderRadius: 6,
    alignItems: 'center',
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
