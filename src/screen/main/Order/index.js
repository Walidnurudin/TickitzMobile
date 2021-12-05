import React from 'react';
import {Footer, Button} from '../../../components/atoms';
import {OrderInfo, Seat} from '../../../components/molecules';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

function Order({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Seat />
      <OrderInfo />
      <View style={{marginHorizontal: 24, marginTop: 63, marginBottom: 72}}>
        <Button
          title="Checkout now"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Order;
