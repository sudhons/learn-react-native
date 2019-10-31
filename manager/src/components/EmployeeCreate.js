import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {Input, Card, CardSection, Button} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const {name, phone, shift, employeeCreate} = this.props;

    employeeCreate({name, phone, shift: shift || 'Monday'});
  };

  render() {
    const {name, phone, shift, employeeUpdate} = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value => employeeUpdate({prop: 'name', value: value})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={phone}
            onChangeText={value =>
              employeeUpdate({prop: 'phone', value: value})
            }
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value => employeeUpdate({prop: 'shift', value})}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = ({employeeForm}) => ({...employeeForm});

export default connect(
  mapStateToProps,
  actions,
)(EmployeeCreate);
