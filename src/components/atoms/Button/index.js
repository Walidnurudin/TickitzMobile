import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../utils/colors';

function Button({title, onPress, isLoading}) {
  return isLoading ? (
    <TouchableOpacity onPress={onPress} style={styles.disable} disabled={true}>
      <ActivityIndicator style={styles.spinner} color={colors.primary} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={false}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 4,
  },
  disable: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    padding: 20,
    borderRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  spinner: {
    fontSize: 20,
  },
});

export default Button;
