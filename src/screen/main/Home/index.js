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

function Home(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [dataMovies, setDataMovies] = useState([]);

  const [month, setMonth] = useState(9);
  const [dataMovieMonth, setDataMovieMonth] = useState([]);

  const getMovies = () => {
    axios
      .get('/movie?page=&limit=&search=&month=&sort=name ASC')
      .then(res => {
        setDataMovies(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const getMovieByMonth = () => {
    axios
      .get(`/movie?page=&limit=&search=&month=${month}&sort=name ASC`)
      .then(res => {
        setDataMovieMonth(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleMonth = value => {
    setMonth(value);

    axios
      .get(`/movie?page=&limit=&search=&month=${value}&sort=name ASC`)
      .then(res => {
        setDataMovieMonth(res.data.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMovies();
    getMovieByMonth();
  }, []);

  return (
    <ScrollView style={styles.page}>
      <Hero />
      <NowShowing navigation={props.navigation} data={dataMovies} />
      <UpComing
        data={dataMovieMonth}
        navigation={props.navigation}
        onPress={value => handleMonth(value)}
        month={month}
      />
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
