import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Footer} from '../../../components/atoms';
import {MovieDesc} from '../../../components/molecules';

function Movie() {
  return (
    <ScrollView>
      <MovieDesc />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {},
});

export default Movie;
