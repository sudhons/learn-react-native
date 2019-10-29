import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firease from 'firebase';
import reducers from './reducers';
import firebaseAuth from '../firebase-config';

export default class App extends Component {
  componentDidMount() {
    firease.initializeApp(firebaseAuth);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}
