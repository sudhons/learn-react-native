import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

export default class LoginForm extends Component {
  state = {email: '', password: '', error: '', isLoading: false};

  onButtonPress = () => {
    const {email, password} = this.state;

    this.setState({error: '', isLoading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({email: '', password: '', isLoading: false, error: ''});
  };

  onLoginFail = () => {
    this.setState({error: 'Authentication Failed', isLoading: false});
  };

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};
