import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Input, Spinner} from './common';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onButtonPress = () => {
    const {email, password, loginUser} = this.props;

    loginUser({email, password});
  };

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="email@gmail.com"
            label="Email"
            value={this.props.email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry={true}
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
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

const mapStateToProps = ({auth}) => ({...auth});

export default connect(
  mapStateToProps,
  actions,
)(LoginForm);
