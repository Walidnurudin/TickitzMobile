import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {cineone21, hiflix} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function OrderInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Info</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <Image style={styles.image} source={cineone21} />
          <Text style={styles.premiere}>CineOne21 Cinema</Text>
          <Text style={styles.movie}>Spider-Man: Homecoming</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.wrapField}>
            <Text style={styles.field}>Tuesday, 07 July 2020</Text>
            <Text style={styles.value}>02:00pm</Text>
          </View>
          <View style={styles.wrapField}>
            <Text style={styles.field}>One ticket price</Text>
            <Text style={styles.value}>$10</Text>
          </View>
          <View style={styles.wrapField}>
            <Text style={styles.field}>Seat choosed</Text>
            <Text style={styles.value}>C4, C5, C6</Text>
          </View>

          <View style={styles.payment}>
            <Text style={styles.total}>Total Payment</Text>
            <Text style={styles.price}>$30</Text>
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
