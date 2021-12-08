import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils/colors';

function InputSearch({onChange, onPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search movie ..."
        onChangeText={value => onChange(value)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 5,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: '#FCFDFE',
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    marginRight: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 7,
  },
});

export default InputSearch;
