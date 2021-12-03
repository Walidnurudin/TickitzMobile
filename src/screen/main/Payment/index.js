import React from 'react';
import {Footer, Button} from '../../../components/atoms';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {PersonalInfo, PaymentMethod} from '../../../components/molecules';
import {colors} from '../../../utils/colors';

function Payment({navigation}) {
  return (
    <ScrollView>
      <View style={styles.payment}>
        <Text style={styles.totalPayment}>Total Payment</Text>
        <Text style={styles.price}>$30.00</Text>
      </View>

      <PaymentMethod />
      <PersonalInfo />
      <View style={styles.wrapButton}>
        <Button
          title="Pay your order"
          onPress={() => navigation.navigate('Ticket')}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapButton: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 72,
  },
  payment: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPayment: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    color: colors.third,
  },
  price: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,
    color: colors.black,
  },
});

export default Payment;
