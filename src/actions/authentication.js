import axios from 'axios';

import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE
} from './ActionTypes';

export function registerRequest(username, password) {
  return (dispath) => {
    dispath(register());

    return axios.post('/api/account/signup', { username, password })
      .then((response) => {
        dispath(registerSuccess());
      }).catch((error) => {
        dispath(registerFailure(error.response.data.code));
      })
  };
}

export function register() {
  return {
    type: AUTH_REGISTER
  };
}

export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS
  };
}

export function registerFailure(error) {
  return {
    type: AUTH_REGISTER_FAILURE,
    error
  };
}

export function loginRequest(username, password) {
  return (dispath) => {
    dispath(login());
    return axios.post('/api/account/signin', { username, password })
      .then((reponse) => {
        dispath(loginSuccess(username));
      }).catch((error) => {
        dispath(loginFailure());
      })
  }
}

export function login() {
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(username) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    username
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}