import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {cineone21, hiflix} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function Seat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Seat</Text>

      <View style={styles.card}>
        <View style={styles.seat}>
          <Text>Seat here</Text>
        </View>

        <View style={styles.seatDesc}>
          <Text>Seating key</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 26,
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
  seat: {},
  seatDesc: {},
});

export default Seat;
