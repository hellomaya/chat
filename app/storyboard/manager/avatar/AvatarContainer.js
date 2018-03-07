import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';
import { Authentication } from 'app-redux';

import Avatar from './Avatar';

const { onLogout } = Authentication;

const Container = (props) => {
  const error = props.error.error;
  return (
    <Avatar
      onLogout={props.onLogout}
      error={error}
    />
  );
}

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onLogout: onLogout(dispatch),
});


Container.propTypes = {
  onLogout: PropTypes.func,
  error: PropTypes.object,
};

Container.defaultProps = {
  onLogout: null,
  error: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
