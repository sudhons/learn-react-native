import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {type: EMPLOYEE_UPDATE, payload: {prop, value}};
};

export const employeeCreate = ({name, phone, shift}) => {
  const {
    currentUser: {uid},
  } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.pop();
      });
  };
};

export const employeeSave = ({name, phone, shift, employeeId}) => {
  const {
    currentUser: {uid},
  } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${uid}/employees/${employeeId}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_SAVE_SUCCESS});
        Actions.pop();
      });
  };
};

export const employeeFetch = () => {
  const {
    currentUser: {uid},
  } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
