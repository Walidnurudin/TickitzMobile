import React from 'react';
import {Footer} from '../../../components/atoms';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../../../utils/colors';
import QRCode from 'react-native-qrcode-svg';

function Ticket() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <QRCode value="tickitz" size={186} />
          </View>
          <View style={styles.content}>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Movie</Text>
                <Text style={styles.value}>Black Widow</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Category</Text>
                <Text style={styles.value}>PG-13</Text>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Date</Text>
                <Text style={styles.value}>07 jul</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Time</Text>
                <Text style={styles.value}>2:00pm</Text>
              </View>
            </View>
            <View style={styles.wrapContent}>
              <View style={{flex: 3}}>
                <Text style={styles.title}>Count</Text>
                <Text style={styles.value}>3 pcs</Text>
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.title}>Seats</Text>
                <Text style={styles.value}>C4, C5, C6</Text>
              </View>
            </View>

            <View style={styles.total}>
              <Text style={styles.totalTitle}>Total</Text>
              <Text style={styles.totalValue}>$30.00</Text>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingTop: 48,
    paddingBottom: 72,
  },
  card: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 55,
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  content: {
    paddingTop: 65,
    paddingHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderTopColor: colors.third,
    borderTopWidth: 0.5,
  },
  wrapContent: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: colors.third,
  },
  value: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: colors.black,
  },
  total: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.third,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  totalTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: colors.black,
  },
  totalValue: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 28,
    color: colors.black,
  },
});

export default Ticket;
