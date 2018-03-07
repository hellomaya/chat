import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Authentication } from 'app-redux';

import AuthScreen from './AuthScreen';

const { onLogin, onRegister } = Authentication;

const Container = (props) => {
  const error = props.error.message;
  return (
    <AuthScreen
      onLogin={props.onLogin}
      onRegister={props.onRegister}
      error={error}
    />
  );
}

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onLogin: onLogin(dispatch),
  onRegister: onRegister(dispatch),
});


Container.propTypes = {
  onLogin: PropTypes.func,
  onRegister: PropTypes.func,
  error: PropTypes.object,
};

Container.defaultProps = {
  onLogin: null,
  onRegister: null,
  error: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
