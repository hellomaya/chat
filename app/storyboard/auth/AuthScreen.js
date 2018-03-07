import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import UserForm from './user/';

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <UserForm
          onLogin={this.props.onLogin}
          onRegister={this.props.onRegister}
          error={this.props.error}
        />
      </View>
    );
  }
}

AuthScreen.propTypes = {
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  error: PropTypes.string,
};

AuthScreen.defaultProps = {
  onLogin: null,
  onRegister: null,
  error: null,
};
