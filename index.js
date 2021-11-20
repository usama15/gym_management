/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './store/userReducer';
import trainerReducer from './store/trainerReducer';
import { NativeBaseProvider, Box } from 'native-base';
const configure = configureStore({
  reducer: {
    user: userReducer,
    trainer: trainerReducer,
  },
});

const Fun = () => (
  <Provider store={configure}>
    <NativeBaseProvider>
    <App />
    </NativeBaseProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Fun);
