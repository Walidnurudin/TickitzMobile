import React from 'react';
import {Button, Input, Gap, MsgResponse} from '../../atoms';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

function UpdateProfile({
  firstName,
  lastName,
  email,
  phoneNumber,
  onChange,
  onPress,
  showError,
  msgError,
  isLoading,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Information</Text>

      <Gap height={40} />
      <Input
        label="First Name"
        placeholder="Write your first name"
        value={firstName}
        onChange={value => onChange(value, 'firstName')}
      />
      <Gap height={25} />
      <Input
        label="Last Name"
        placeholder="Write your last name"
        value={lastName}
        onChange={value => onChange(value, 'lastName')}
      />
      <Gap height={25} />
      <Input
        label="Email"
        placeholder="Write your email"
        value={email}
        // onChange={value => onChange(value, 'email')}
      />
      <Gap height={25} />
      <Input
        label="Phone Number"
        placeholder="Write your phone number"
        value={phoneNumber}
        onChange={value => onChange(value, 'phoneNumber')}
      />
      <Gap height={48} />
      {showError && <MsgResponse msg={msgError} />}
      <Button title="Update changes" onPress={onPress} isLoading={isLoading} />
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
