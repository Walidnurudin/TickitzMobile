import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {cineone21, hiflix, ebvid} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function OrderInfo({
  dataMovie,
  dataSchedule,
  dateSchedule,
  timeSchedule,
  seat,
  total,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Info</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={
              dataSchedule.premire === 'hiflix'
                ? hiflix
                : dataSchedule.premire === 'cineone21'
                ? cineone21
                : ebvid
            }
          />
          <Text style={styles.premiere}>{dataMovie.premiere} Cinema</Text>
          <Text style={styles.movie}>{dataMovie.name}</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.wrapField}>
            <Text style={styles.field}>{dateSchedule || '-'}</Text>
            <Text style={styles.value}>{timeSchedule || '-'}</Text>
          </View>
          <View style={styles.wrapField}>
            <Text style={styles.field}>One ticket price</Text>
            <Text style={styles.value}>${dataSchedule.price || '-'}</Text>
          </View>
          <View style={styles.wrapField}>
            <Text style={styles.field}>Seat choosed</Text>
            <Text style={styles.value}>{seat.length ? seat : '-'}</Text>
          </View>

          <View style={styles.payment}>
            <Text style={styles.total}>Total Payment</Text>
            <Text style={styles.price}>
              ${seat.length * dataSchedule.price || 0}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 34,
    color: colors.black,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 11,
    paddingHorizontal: 21,
    paddingTop: 32,
    paddingBottom: 23,
    borderRadius: 6,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 20,
    resizeMode: 'contain',
  },
  premiere: {
    marginTop: 8,
    marginBottom: 7,
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '600',
    color: colors.black,
  },
  movie: {
    marginBottom: 26,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: colors.black,
  },
  wrapField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  field: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: colors.third,
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: colors.black,
  },
  payment: {
    marginTop: 20,
    paddingTop: 20,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 34,
    color: colors.black,
  },
  price: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
  },
});

export default OrderInfo;
