import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function Home() {
  return (
    <View>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text>Left side</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Right side</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;
