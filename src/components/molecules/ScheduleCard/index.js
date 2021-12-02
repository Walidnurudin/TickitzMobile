import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '../../atoms';
import {ebvid} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function SceduleCard({navigation}) {
  const [time, setTime] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={ebvid} style={styles.image} />
        <Text style={styles.address}>
          Whatever street No.12, South Purwokerto
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingTop: 16,
          paddingBottom: 24,
        }}>
        {time.map(item => (
          <Text key={item} style={{}}>
            08:30
          </Text>
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.seat}>$10.00/seat</Text>
      </View>

      <Button title="Book now" onPress={() => navigation.navigate('Order')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  wrapImage: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 30,
    marginBottom: 12,
  },
  address: {
    fontWeight: '300',
    fontSize: 13,
    lineHeight: 22,
    color: colors.third,
    paddingBottom: 23,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  price: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
  },
  seat: {
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.black,
  },
});

export default SceduleCard;
