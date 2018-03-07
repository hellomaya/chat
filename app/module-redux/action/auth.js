/**
 * authentication redux module
 *
 * - authentication is the first step of the app
 * - it required user logged to continue
 * - subscribed by auth container
 */

'use strict';

import * as firebase from 'firebase';
import { FirebaseService, TwilioChatService } from 'app-service';
import { Auth } from 'app-data';
import {
  sessionValid,
  sessionInvalid,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
} from '../modules/auth';

// dispatch action

export const onStart = dispatch => () => {
  console.log('on start');
  Auth.getIdentity((ret, err) => {
    if (!err) {
      dispatch(sessionValid(ret));
    } else {
      dispatch(sessionInvalid(ret));
    }
  });

  FirebaseService.init();
};

export const onLogin = dispatch => (email, password) => {
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // https://firebase.google.com/docs/reference/js/firebase.auth.Auth
      const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          // Auth.saveIdentity(user);
          dispatch(loginSuccess(user));
        } else {
          // No user is signed in.
          // Auth.removeIdentity();
          dispatch(loginError(''));
        }
        unSubscribe();
      });
    })
    .catch((error) => {
      dispatch(loginError(error.message));
    });
};

export const onRegister = dispatch => (email, password) => {
  console.log('on register');
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const unSubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          dispatch(registerSuccess(user));
        } else {
          // No user is signed in.
          dispatch(loginError(''));
        }

        unSubscribe();
      });
    })
    .catch((error) => {
      dispatch(registerError(error.message));
    });
};

export const onLogout = (dispatch) => () => {
  firebase.auth()
    .signOut()
    .then(() => {
      Auth.removeIdentity();
      dispatch(logoutSuccess());
    })
    .catch((error) => {
      dispatch(logoutError(error));
    });

  TwilioChatService.logout();
};

export const onUpdatePassword = (dispatch) => (password) => {
  const user = firebase.auth().currentUser;

  user.updatePassword(password).then(() => {
    // Update successful.
    alert('Your password is changed')
  }).catch((error) => {
    // An error happened.
  });
};

