import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  gopay,
  google_pay,
  ovo,
  dana,
  paypal,
  visa,
  bri,
  bca,
} from '../../../assets/images';
import {colors} from '../../../utils/colors';

function PaymentMethod({pay, onPress}) {
  const [payment, setPayment] = useState([
    {
      id: 1,
      name: 'gopay',
      image: gopay,
    },
    {
      id: 2,
      name: 'google-pay',
      image: google_pay,
    },
    {
      id: 3,
      name: 'ovo',
      image: ovo,
    },
    {
      id: 4,
      name: 'dana',
      image: dana,
    },
    {
      id: 5,
      name: 'paypal',
      image: paypal,
    },
    {
      id: 6,
      name: 'visa',
      image: visa,
    },
    {
      id: 7,
      name: 'bri',
      image: bri,
    },
    {
      id: 8,
      name: 'bca',
      image: bca,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>

      <View style={styles.card}>
        {payment.map(item => (
          <TouchableOpacity
            onPress={() => onPress(item.name)}
            style={
              item.name === pay ? styles.wrapImageActive : styles.wrapImage
            }
            key={item.id}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 40,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 34,
    color: colors.black,
  },
  image: {
    width: 50,
    height: 20,
    resizeMode: 'contain',
  },
  wrapImage: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dedede',
    margin: 8,
  },
  wrapImageActive: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#dedede',
    margin: 8,
    backgroundColor: 'grey',
  },
  card: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 16,
    paddingHorizontal: 22,
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
  },
});

export default PaymentMethod;
