import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import * as actions from '../actions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  renderRow = ({item}) => <ListItem employee={item} />;

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = ({employees}) => {
  const employeeArr = Object.keys(employees).reduce((arr, uid) => {
    arr.push({...employees[uid], uid});
    return arr;
  }, []);
  return {employees: employeeArr};
};

export default connect(
  mapStateToProps,
  actions,
)(EmployeeList);
