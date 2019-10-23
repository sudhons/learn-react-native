/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return <Header headerText="Albums"/>
};

AppRegistry.registerComponent(appName, () => App);
