import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import fireBaseAuth from '../auth';

export default class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    firebase.initializeApp(fireBaseAuth);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
