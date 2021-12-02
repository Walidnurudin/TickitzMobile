import React from 'react';
import {Footer, Button} from '../../../components/atoms';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

function Order({navigation}) {
  return (
    <ScrollView>
      <View>
        <Text>Order page</Text>
        <Button
          title="Checkout now"
          onPress={() => navigation.navigate('Payment')}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Order;
