import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {cineone21, hiflix} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function TicketHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image source={cineone21} style={styles.image} />
        </View>

        <View style={styles.wrapData}>
          <Text style={styles.date}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.title}>Spider man</Text>
        </View>

        <TouchableOpacity style={styles.buttonActive}>
          <Text style={styles.buttonTextActive}>Ticket in active</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 32,
  },
  wrapData: {
    paddingTop: 17,
    paddingBottom: 32,
    borderBottomWidth: 0.5,
    color: colors.secondary,
    marginBottom: 24,
  },
  date: {
    marginBottom: 4,
    color: colors.third,
    fontWeight: '400',
    fontSize: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    color: colors.black,
  },
  image: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  buttonActive: {
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 186, 136, 1)',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonTextActive: {
    color: 'white',
    fontWeight: '700',
  },
});

export default TicketHistory;