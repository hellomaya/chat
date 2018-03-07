import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import auth from './modules/auth';
import init from './modules/init';
import message from './modules/message';

const reducer = combineReducers({
  auth,
  init,
  message,
});

const configureStore = () => {
  const middleware = [thunk, logger];
  return createStore(reducer, applyMiddleware(...middleware));
};

export default configureStore;
