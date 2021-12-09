import React, {useEffect, useState} from 'react';
import {Footer, Button} from '../../../components/atoms';
import {OrderInfo, Seat} from '../../../components/molecules';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from '../../../utils/axios';
import {colors} from '../../../utils/colors';

function Order({navigation, route}) {
  // SEAT
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };
  // END SEAT

  const [params, setParams] = useState({
    movieId: route.params.params.movieId,
    scheduleId: route.params.params.scheduleId,
    timeSchedule: route.params.params.timeSchedule,
    dateSchedule: route.params.params.dateSchedule,
    premiere: '',
  });
  const [dataMovie, setDataMovie] = useState({});
  const [dataSchedule, setDataSchedule] = useState({});

  const getMovieById = () => {
    axios
      .get(`/movie/${params.movieId}`)
      .then(res => {
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
        console.log(res, 'SCHEDULE');
        setDataSchedule(res.data.data[0]);
        setParams({
          ...params,
          premiere: res.data.data[0].premiere,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getSeat = () => {
    axios
      .get(
        `/seat/?scheduleId=${params.scheduleId}&movieId=${params.movieId}&dateBooking=${params.dateSchedule}&timeBooking=${params.timeSchedule}`,
      )
      .then(res => {
        console.log(res, 'SEAT');
        setReservedSeat(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const toPayment = () => {
    navigation.navigate('Payment', {
      params: {
        ...params,
        dataSeat: selectedSeat,
        name: dataMovie.name,
        total:
          selectedSeat.length > 0
            ? selectedSeat.length * dataSchedule.price
            : 0,
      },
    });
  };

  useEffect(() => {
    console.log(route.params);
    getSeat();
    getMovieById();
    getScheduleById();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* SEAT */}
      <View style={styles.containerSeat}>
        <Text style={styles.title}>Choose Your Seat</Text>

        <View style={styles.card}>
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
          <View style={styles.seatDesc}>
            <Text>Seating key</Text>

            <View style={styles.boxDesc}>
              <View style={styles.boxWrap}>
                <View style={styles.box} />
                <Text>Available</Text>
              </View>

              <View style={styles.boxWrap}>
                <View style={styles.box} />
                <Text>Available</Text>
              </View>

              <View style={styles.boxWrap}>
                <View style={styles.box} />
                <Text>Available</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* =========== */}

      <OrderInfo
        dataMovie={dataMovie}
        dataSchedule={dataSchedule}
        dateSchedule={params.dateSchedule}
        timeSchedule={params.timeSchedule}
        seat={selectedSeat}
      />
      <View style={{marginHorizontal: 24, marginTop: 63, marginBottom: 72}}>
        <Button
          title="Checkout now"
          onPress={() => toPayment()}
          disabled={selectedSeat.length === 0}
        />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerSeat: {
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
  seatDesc: {},
  boxDesc: {
    flexDirection: 'row',
    marginTop: 10,
  },
  boxWrap: {
    flexDirection: 'row',
    marginRight: 15,
  },
  box: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    marginRight: 5,
  },
});

export default Order;
