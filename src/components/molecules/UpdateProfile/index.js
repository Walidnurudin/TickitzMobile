import React from 'react';
import {Button, Input, Gap} from '../../atoms';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

function UpdateProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Information</Text>

      <Gap height={40} />
      <Input label="Full Name" placeholder="Write your name" />
      <Gap height={25} />
      <Input label="Email" placeholder="Write your email" />
      <Gap height={25} />
      <Input label="Phone Number" placeholder="Write your phone number" />
      <Gap height={48} />
      <Button title="Update changes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 28,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.third,
    paddingBottom: 8,
    color: colors.black,
  },
});

export default UpdateProfile;
