import React from 'react';
import {Button, Input, Gap} from '../../atoms';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {MsgResponse} from '../../atoms';

function UpdatePassword({onChange, onPress, isLoading, showError, msgError}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account and Privacy</Text>

      <Gap height={40} />
      <Input
        label="New Password"
        placeholder="Write new passowrd"
        isPassword={true}
        onChange={value => onChange(value, 'newPassword')}
      />
      <Gap height={25} />
      <Input
        label="Confirm Password"
        placeholder="Write confirm password"
        isPassword={true}
        onChange={value => onChange(value, 'confirmPassword')}
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
    marginBottom: 72,
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

export default UpdatePassword;
