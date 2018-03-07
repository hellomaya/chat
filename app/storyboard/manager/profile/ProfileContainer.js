import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Authentication } from 'app-redux';

import ProfileScreen from './ProfileScreen';

const { onUpdatePassword } = Authentication;

class Container extends Component {
  render() {
    const error = this.props.error.message;
    return (
      <ProfileScreen
        user={this.props.user}
        error={error}
        onUpdatePassword={this.props.onUpdatePassword}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.init.error,
});

const mapDispatchToProps = dispatch => ({
  onUpdatePassword: onUpdatePassword(dispatch),
});

Container.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
  onUpdatePassword: PropTypes.func,
};

Container.defaultProps = {
  user: null,
  error: null,
  onUpdatePassword: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
