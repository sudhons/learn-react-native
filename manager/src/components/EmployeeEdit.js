import React, {Component} from 'react';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';
import Communcations from 'react-native-communications';

class EmployeeEdit extends Component {
  componentDidMount() {
    const {employee, employeeUpdate} = this.props;

    Object.entries(employee).forEach(([prop, value]) => {
      employeeUpdate({prop, value});
    });
  }
  onButtonPress = () => {
    const {name, phone, shift, employee: {uid}, employeeSave} = this.props;

    employeeSave({name, phone, shift, employeeId: uid});
  };

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communcations.text(phone, `You coming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({employeeForm}) => ({...employeeForm});

export default connect(
  mapStateToProps,
  actions,
)(EmployeeEdit);
