import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TextInput,
  Text,
} from 'react-native';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      error: null,
    };
  }

  componentWillReceiveProps(newProps, prevState) {
    // console.log(newProps);
    this.setState({
      error: newProps.error,
    });
  }

  onSwitch = () => {
    this.setState((prevState) => ({
      signIn: !prevState.signIn,
      error: null,
    }));
  }

  render() {
    if (this.state.error) {
      alert(this.state.error);
    }

    // if (this.state.signIn) {
      return (
        <SignInForm
          onSwitch={this.onSwitch}
          onLogin={this.props.onLogin}
        />
      );
    // }

    return (
      <SignUpForm
        onSwitch={this.onSwitch}
        onRegister={this.props.onRegister}
      />
    );
  }
}


const propTypes = {
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  error: PropTypes.string,
};

const defaultProps = {
  onLogin: null,
  onRegister: null,
  error: null,
};

UserForm.propTypes = propTypes;
UserForm.defaultProps = defaultProps;
