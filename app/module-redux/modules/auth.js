/**
 * authentication redux module
 *
 * - authentication is the first step of the app
 * - it required user logged to continue
 * - subscribed by auth container
 */

'use strict';

import * as firebase from 'firebase';
import { Auth } from 'app-data';

const AUTH_SESSION_VALID = 'module-redux/auth/AUTH_SESSION_VALID';
const AUTH_SESSION_INVALID = 'module-redux/auth/AUTH_SESSION_INVALID';

const AUTH_LOGIN_SUCC = 'module-redux/auth/AUTH_LOGIN_SUCC';
const AUTH_LOGIN_ERROR = 'module-redux/auth/AUTH_LOGIN_ERROR';
const AUTH_REGISTER_SUCC = 'module-redux/auth/AUTH_REGISTER_SUCC';
const AUTH_REGISTER_ERROR = 'module-redux/auth/AUTH_REGISTER_ERROR';
const AUTH_LOGOUT_SUCC = 'module-redux/auth/AUTH_LOGOUT_SUCC';
const AUTH_LOGOUT_ERROR = 'module-redux/auth/AUTH_LOGOUT_ERROR';

const initialState = {
  initial: false,
  user: null,
  error: {
    code: 0,
    message: null,
  },
};

// reducer

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_SESSION_VALID:
      return {
        ...state,
        initial: true,
        user: action.payload.user,
      };
    case AUTH_SESSION_INVALID:
      return {
        ...state,
        initial: true,
        user: null,
      };
    case AUTH_LOGIN_SUCC:
    case AUTH_REGISTER_SUCC:
      return {
        ...state,
        user: action.payload.user,
      };
    case AUTH_LOGIN_ERROR:
    case AUTH_REGISTER_ERROR:
      // alert(action.error);
      return {
        ...state,
        user: null,
        error: {
          code: 0,
          message: action.error,
        },
      };
    case AUTH_LOGOUT_SUCC:
      return {
        ...state,
        user: null,
      };
    case AUTH_LOGOUT_ERROR:
    default:
      return state;
  }
};

// action creator


export const sessionValid = user => ({
  type: AUTH_SESSION_VALID,
  payload: {
    user,
  },
});

export const sessionInvalid = error => ({
  type: AUTH_SESSION_INVALID,
  payload: {
    user: null,
  },
  error,
});

export const registerSuccess = user => ({
  type: AUTH_REGISTER_SUCC,
  payload: {
    user,
  },
});

export const registerError = error => ({
  type: AUTH_REGISTER_ERROR,
  payload: {
    user: null,
  },
  error,
});

export const loginSuccess = user => ({
  type: AUTH_LOGIN_SUCC,
  payload: {
    user,
  },
});

export const loginError = error => ({
  type: AUTH_LOGIN_ERROR,
  payload: {
    user: null,
  },
  error,
});

export const logoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCC,
  payload: {
    user: null,
  },
});

export const logoutError = error => ({
  type: AUTH_LOGOUT_ERROR,
  error,
});
