import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import {URL_BACKEND} from '@env';

function CardMovie({item, toDetail}) {
  return (
    <View style={styles.wrapImage}>
      <Image
        style={styles.image}
        source={
          item.image
            ? // ? `${URL_BACKEND}/uploads/movie/${item.image}`
              {
                uri: `${URL_BACKEND}/uploads/movie/${item.image}`,
                // uri: `http://192.168.43.155:3001/uploads/movie/${item.image}`,
              }
            : def
        }
      />

      <View style={styles.wrapDesc}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => toDetail(item.id)}>
          <Text style={styles.buttonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapImage: {
    borderColor: '#DEDEDE',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 6,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    padding: 16,
    width: 102,
    height: 125,
  },
  wrapDesc: {
    paddingLeft: 20,
    alignSelf: 'center',
  },
  title: {
    color: colors.black,
  },
  category: {
    marginBottom: 24,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '300',
    color: colors.primary,
  },
});

export default CardMovie;
