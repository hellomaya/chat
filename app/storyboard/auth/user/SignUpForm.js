import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  TextInput,
  Text,
} from 'react-native';

import trim from 'lodash/trim';
import Button from 'react-native-button';
import { SignInForm as Styles, StyleConst } from 'app-style';

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      mask: '',
    };

    this.password = '';
  }

  onSwitch = () => {
    if (this.props.onSwitch) {
      this.props.onSwitch();
    }
  }

  onRegister = () => {
    const email = trim(this.state.email);
    const password = this.state.password;

    console.log(email);
    console.log(password);

    if (this.props.onRegister) {
      this.props.onRegister(email, password);
    }
  }


  onChangeText = (key, value) => {
    if (key === 'password') {
      this.setState((prevState) => ({
        password: value.length >= prevState.password.length ? prevState.password + value.slice(-1) : prevState.password.slice(0, prevState.password.length - 1),
        mask: value,
      }));
      return;
    }

    this.setState({
      [key]: value,
    });
  }

  renderForm = () => {
    let password = '';
    for (let i = 0; i < this.state.mask.length; i += 1) {
      password += '*';
    }

    return (
      <View style={Styles.form} >
        <View style={Styles.rowWithBorderBottom} >
          <View style={Styles.colFixFirst} >
            {StyleConst.IconEmail}
          </View>
          <View style={Styles.colNoPadding} >
            <TextInput
              value={this.state.email}
              autoCorrect={false}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
              onChangeText={(value) => {
                this.onChangeText('email', value);
              }}
              style={Styles.inputText}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={Styles.row} >
          <View style={Styles.colFixFirst} >
            {StyleConst.IconPassword}
          </View>
          <View style={Styles.colNoPadding} >
            <TextInput
              value={password}
              autoCorrect={false}
              autoCapitalize={'none'}
              onChangeText={(value) => {
                this.onChangeText('password', value);
              }}
              style={Styles.inputText}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={[Styles.row, { marginTop: 25 }]} >
          <Button
            containerStyle={Styles.button}
            onPress={this.onRegister}
          >
            <Text style={Styles.buttonText} >
              Sign Up
            </Text>
          </Button>
        </View>
        <View style={[Styles.row, { marginTop: 10 }]} >
          <Button
            containerStyle={[Styles.button, { backgroundColor: 'transparent' }]}
            onPress={this.onSwitch}
          >
            <Text style={{ color: 'orange' }} >
              Sign In
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={Styles.container}
        keyboardShouldPersistTaps={'handled'}
      >
        {this.renderForm()}
      </ScrollView>
    );
  }
}

const propTypes = {
  onSwitch: PropTypes.func,
  onRegister: PropTypes.func,
};

const defaultProps = {
  onSwitch: null,
  onRegister: null,
};

SignUpForm.propTypes = propTypes;
SignUpForm.defaultProps = defaultProps;
