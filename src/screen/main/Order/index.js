import React, {useEffect, useState} from 'react';
import {Footer, Button} from '../../../components/atoms';
import {OrderInfo, Seat} from '../../../components/molecules';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import axios from '../../../utils/axios';

function Order({navigation, route}) {
  const [params, setParams] = useState({
    movieId: route.params.params.movieId,
    scheduleId: route.params.params.scheduleId,
    timeSchedule: route.params.params.timeSchedule,
    dateSchedule: route.params.params.dateSchedule,
  });
  const [dataMovie, setDataMovie] = useState({});
  const [dataSchedule, setDataSchedule] = useState({});
  const [dataSeat, setDataSeat] = useState([]);

  const getMovieById = () => {
    axios
      .get(`/movie/${params.movieId}`)
      .then(res => {
        console.log(res);
        setDataMovie(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getScheduleById = () => {
    axios
      .get(`/schedule/${params.scheduleId}`)
      .then(res => {
        setDataSchedule(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const toPayment = () => {
    navigation.navigate('Payment', {
      params: {
        ...params,
        dataSeat,
        total: dataSeat.length > 0 ? dataSeat * dataSchedule.price : 0,
      },
    });
  };

  useEffect(() => {
    getMovieById();
    getScheduleById();
    console.log(params);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Seat />
      <OrderInfo
        dataMovie={dataMovie}
        dataSchedule={dataSchedule}
        dateSchedule={params.dateSchedule}
        timeSchedule={params.timeSchedule}
        seat={dataSeat}
      />
      <View style={{marginHorizontal: 24, marginTop: 63, marginBottom: 72}}>
        <Button title="Checkout now" onPress={() => toPayment()} />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Order;
