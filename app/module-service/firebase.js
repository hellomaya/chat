import * as firebase from 'firebase';
import { firebase as config } from './config';

export default class FirebaseService {
  static init() {
    return firebase.initializeApp(config);
  }
}
