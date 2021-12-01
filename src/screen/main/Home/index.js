import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Footer} from '../../../components/atoms';
import {
  Hero,
  NowShowing,
  UpComing,
  JoinNow,
} from '../../../components/molecules';

function Home() {
  return (
    <ScrollView style={styles.page}>
      <Hero />
      <NowShowing />
      <UpComing />
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
