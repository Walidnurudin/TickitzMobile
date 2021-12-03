import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Input, Gap} from '../../../components/atoms';
import {colors} from '../../../utils/colors';

function PersonalInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Info</Text>

      <View style={styles.card}>
        <Input label="Full Name" value="Walid Nurudin" />
        <Gap height={24} />
        <Input label="Email" value="walidnurudin47@gmail.com" />
        <Gap height={24} />
        <Input label="Phone Number" value="0831xxxxx" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 34,
    color: colors.black,
  },
  card: {
    marginTop: 16,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});

export default PersonalInfo;
