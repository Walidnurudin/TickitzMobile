import React, {useState} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function NowShowing() {
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nowShowing}>Now Showing</Text>
        <Text style={styles.viewAll}>view all</Text>
      </View>

      <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <View key={item} style={styles.wrapImage}>
            <Image style={styles.image} source={def} />
          </View>
        ))}
      </ScrollView>
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
});

export default NowShowing;
