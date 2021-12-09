import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {URL_BACKEND} from '@env';

function ProfileComponent({name, image, role, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.wrapHeader}>
          <Text>INFO</Text>
          <Icon name="ellipsis-h" size={20} color={colors.primary} />
        </View>
        <TouchableOpacity style={styles.wrapImage} onPress={onPress}>
          <Image
            source={image ? {uri: `${URL_BACKEND}/uploads/user/${image}`} : def}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.wrapInfo}>
          <Text style={styles.name}>{name || '-'}</Text>
          <Text style={styles.title}>{role || '-'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 24, marginTop: 54},
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 70,
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapImage: {
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    // resizeMode: 'contain',
  },
  wrapInfo: {
    marginTop: 32,
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 34,
    color: colors.black,
    marginBottom: 4,
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: colors.third,
  },
});

export default ProfileComponent;
