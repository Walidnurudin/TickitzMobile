import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Footer} from '../../../components/atoms';
import {
  Hero,
  NowShowing,
  UpComing,
  JoinNow,
} from '../../../components/molecules';
import axios from '../../../utils/axios';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../stores/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [dataMovies, setDataMovies] = useState([]);

  const getDataUser = async () => {
    dispatch(getUser()).then(res => {
      console.log(res, 'GET USER REDUX');
    });
  };

  const getMovies = () => {
    axios
      .get('/movie?page=&limit=&search=&month=&sort=name ASC')
      .then(res => {
        console.log(res.data.data);
        setDataMovies(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getDataUser();
    getMovies();
  }, []);

  return (
    <ScrollView style={styles.page}>
      <Hero />
      <NowShowing />
      <UpComing data={dataMovies} navigation={props.navigation} />
      <JoinNow />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },
});

export default Home;
