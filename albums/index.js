/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry, Text} from 'react-native';

const App = () => {
  return <Text>Some Text</Text>;
};

AppRegistry.registerComponent(appName, () => App);
