import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// REDUX
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../stores/store';

import Splash from '../screen/Splash';
// import {Movie} from '../screen/main';

import AuthNavigator from './auth';
import AppNavigator from './app';

const Stack = createNativeStackNavigator();

function MainStackNavigator(params) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Testing */}
            {/* <Stack.Screen
          component={Movie}
          name="Movie"
          options={{headerShown: false}}
        /> */}

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
      </PersistGate>
    </Provider>
  );
}

export default MainStackNavigator;
