/**
 * @format
 */

import React from 'react';
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums"/>
      <AlbumList />
    </View>
  )
};

AppRegistry.registerComponent(appName, () => App);
