import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user from './user';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
