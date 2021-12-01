import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {def} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function UpComing() {
  const [data, setData] = useState([1, 2, 3, 4]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.upComing}>Upcoming Movies</Text>
        <Text style={styles.viewAll}>view all</Text>
      </View>

      <ScrollView
        style={styles.month}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <View key={item} style={styles.monthWrap}>
            <Text style={styles.monthItem}>September</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.content}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map(item => (
          <View key={item} style={styles.wrapImage}>
            <Image style={styles.image} source={def} />
            <View style={styles.wrapDesc}>
              <Text style={styles.title}>Black Widow</Text>
              <Text style={styles.category}>Action, Adventure, Sci-Fi</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 72,
    paddingTop: 80,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  upComing: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
  },
  viewAll: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.primary,
  },
  month: {
    marginLeft: 24,
    paddingRight: 24,
    marginBottom: 40,
  },
  monthWrap: {
    paddingVertical: 12,
    paddingHorizontal: 27,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: 16,
  },
  monthItem: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: colors.primary,
  },
  content: {
    marginLeft: 24,
    paddingRight: 24,
  },
  wrapImage: {
    borderColor: 'rgba(222, 222, 222, 1)',
    borderWidth: 2,
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

export default UpComing;
