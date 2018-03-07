/**
 *
 */

'use strict';

import { AsyncStorage } from 'react-native';

const AUTH_IDENTITY = 'userIdentity';

class Auth {
  getIdentity(cb) {
    try {
      const value = AsyncStorage.getItem(AUTH_IDENTITY);
      if (value !== null) {
        // We have data!!
        value.then((result) => {
          // console.log(result);
          // alert('empty data');
          if (result === null) {
            cb('', true);
            return;
          }
          cb(JSON.parse(result), false);
        }).catch((error) => {
          // will be null
          cb(error.toString(), true);
        });
      } else {
        cb('empty notes', true);
      }
    } catch (error) {
      // Error retrieving data
      cb(error.toString(), true);
    }
  }

  saveIdentity(user) {
    try {
      const str = JSON.stringify({
        email: user.email,
        id: user.uid,
      });
      console.log('identity');
      console.log(user);
      AsyncStorage.setItem(AUTH_IDENTITY, str);
    } catch (error) {
      alert(error);
    }
  }

  removeIdentity() {
    try {
      AsyncStorage.removeItem(AUTH_IDENTITY);
    } catch (error) {
      alert(error);
    }
  }
}

export default new Auth();
