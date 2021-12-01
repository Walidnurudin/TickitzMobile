import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {Login, Register, ForgotPassword} from '../screen/auth';

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ForgotPassword}
        name="ForgotPassword"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
