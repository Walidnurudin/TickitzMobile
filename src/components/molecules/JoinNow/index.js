import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';

function JoinNow() {
  return (
    <View style={styles.container}>
      <Text style={styles.sub}>Be the vanguard of the</Text>
      <Text style={styles.title}>Moviegoers</Text>

      <TextInput style={styles.input} placeholder="Type your email" />
      <Gap height={16} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join now</Text>
      </TouchableOpacity>

      <Text style={styles.desc}>
        By joining you as a Tickitz member, we will always send you the latest
        updates via email.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginBottom: 64,
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 48,
    paddingHorizontal: 32,
  },
  sub: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    color: colors.third,
  },
  title: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 42,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(222, 222, 222, 1)',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 32,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  desc: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.third,
  },
});

export default JoinNow;
