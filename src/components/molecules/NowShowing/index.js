import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';
import {URL_BACKEND} from '@env';

function NowShowing({navigation, data}) {
  const toDetail = id => {
    navigation.navigate('Movie', {params: {idMovie: id}});
  };

  const viewAll = () => {
    navigation.navigate('SearchNavigator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nowShowing}>Now Showing</Text>
        <Text style={styles.viewAll} onPress={viewAll}>
          view all
        </Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <View key={item.id} style={styles.wrapImage}>
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
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => toDetail(item.id)}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {/* <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <View key={item} style={styles.wrapImage}>
            <Image style={styles.image} source={def} />
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 56,
    paddingTop: 48,
    backgroundColor: 'rgba(214, 216, 231, 1)',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  nowShowing: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: colors.primary,
  },
  viewAll: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.primary,
  },
  content: {
    marginLeft: 24,
    paddingRight: 24,
  },
  wrapImage: {
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 3,
    borderRadius: 6,
    padding: 16,
    marginRight: 16,
  },
  image: {
    padding: 16,
    width: 122,
    height: 185,
  },
  wrapDesc: {
    width: 122,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: colors.black,
    marginTop: 12,
  },
  category: {
    textAlign: 'center',
    marginTop: 5,
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

export default NowShowing;
