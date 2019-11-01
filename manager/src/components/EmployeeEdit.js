import React, {Component} from 'react';
import {Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

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

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
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
