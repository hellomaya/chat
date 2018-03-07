import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Authentication } from 'app-redux';

import Home from './Home';

const { onStart } = Authentication;

class Container extends Component {
  componentDidMount() {
    if (this.props.onStart) {
      this.props.onStart();
    }
  }

  render() {
    if (this.props.initial === false) {
      return null;
    }

    return (
      <Home
        logged={!this.props.logged}
      />
    );
  }
}

const mapStateToProps = state => ({
  initial: state.auth.initial,
  logged: !state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onStart: onStart(dispatch),
});

Container.propTypes = {
  onStart: PropTypes.func,
  logged: PropTypes.bool,
  initial: PropTypes.bool,
};

Container.defaultProps = {
  onStart: null,
  logged: false,
  initial: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
