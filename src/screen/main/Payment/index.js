import React, {useState} from 'react';
import {Footer, Button, MsgResponse} from '../../../components/atoms';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {PersonalInfo, PaymentMethod} from '../../../components/molecules';
import {colors} from '../../../utils/colors';
import axios from '../../../utils/axios';
import Notifications from './notif';

function Payment({navigation, route}) {
  const [data, setData] = useState({
    dataSeat: route.params.params.dataSeat,
    dateSchedule: route.params.params.dateSchedule,
    movieId: route.params.params.movieId,
    scheduleId: route.params.params.scheduleId,
    timeSchedule: route.params.params.timeSchedule,
    total: route.params.params.total,
    name: route.params.params.name,
    premiere: route.params.params.premiere,
    paymentMethod: '',
  });

  const [response, setResponse] = useState({
    show: false,
    isSuccess: false,
    msg: '',
  });
  const [loading, setLoading] = useState(false);

  const handlePayment = item => {
    setData({...data, paymentMethod: item});
  };

  const handlePay = () => {
    setLoading(true);
    axios
      .post('/booking', {
        scheduleId: data.scheduleId,
        dateBooking: data.dateSchedule,
        timeBooking: data.timeSchedule,
        paymentMethod: data.paymentMethod,
        seat: data.dataSeat,
      })
      .then(res => {
        Notifications.reminderNotification();
        setLoading(false);

        navigation.navigate('Midtrans', {
          params: {
            ...data,
            url: res.data.data.urlRedirect,
            bookingId: res.data.data.id,
          },
        });
      })
      .catch(err => {
        setLoading(false);
        setResponse({
          show: true,
          isSuccess: false,
          msg: err.response.data.msg,
        });

        setTimeout(() => {
          setResponse({
            show: false,
            isSuccess: false,
            msg: '',
          });
        }, 4000);
      });
  };

  return (
    <View>
      <View style={styles.payment}>
        <Text style={styles.totalPayment}>Total Payment</Text>
        <Text style={styles.price}>${data.total}</Text>
      </View>
      <ScrollView>
        <PaymentMethod
          pay={data.paymentMethod}
          onPress={item => handlePayment(item)}
        />
        <PersonalInfo />
        <View style={styles.wrapButton}>
          {response.show && (
            <MsgResponse isSuccess={response.isSuccess} msg={response.msg} />
          )}

          <Button
            title="Pay your order"
            disabled={!data.paymentMethod}
            onPress={handlePay}
            isLoading={loading}
          />
        </View>
        <Footer />
      </ScrollView>
    </View>
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
