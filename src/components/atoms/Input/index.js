import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {colors} from '../../../utils/colors';

function Input({label, placeholder, value, isPassword, onChange}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          secureTextEntry={showPassword}
        />
        {isPassword && (
          <Icon
            style={styles.icon}
            name={showPassword ? 'eye-slash' : 'eye'}
            size={20}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 12,
    color: colors.secondary,
  },
  inputWrap: {
    position: 'relative',
  },
  input: {
    paddingVertical: 22,
    paddingHorizontal: 24,
    backgroundColor: '#FCFDFE',
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    top: 25,
    right: 20,
  },
});

export default Input;
