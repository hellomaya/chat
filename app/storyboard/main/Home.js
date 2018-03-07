import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import AuthContainer from '../auth/AuthContainer';
import Manager from '../manager/index';

const ChatApp = (props) => {
  if (!props.logged) {
    return (
      <AuthContainer />
    );
  }

  return <Manager />;
};

ChatApp.propTypes = {
  logged: PropTypes.bool,
};

ChatApp.defaultProps = {
  logged: false,
};

export default ChatApp;
