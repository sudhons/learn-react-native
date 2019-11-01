import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firease from 'firebase';
import reducers from './reducers';
import firebaseAuth from '../firebase-config';
import Router from './Router';

export default class App extends Component {
  componentDidMount() {
    firease.initializeApp(firebaseAuth);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
