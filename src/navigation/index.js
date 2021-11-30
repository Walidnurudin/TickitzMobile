import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash} from '../screen';

import AuthNavigator from './auth';
import AppNavigator from './app';

const Stack = createNativeStackNavigator();

function MainStackNavigator(params) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AuthNavigator}
          name="AuthNavigator"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AppNavigator}
          name="AppNavigator"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
