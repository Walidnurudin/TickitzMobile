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

function Home(props) {
  const [dataMovies, setDataMovies] = useState([]);

  const getUser = () => {
    axios
      .get('/user')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
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
    getUser();
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
