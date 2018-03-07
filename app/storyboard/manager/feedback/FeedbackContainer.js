import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FeedbackScreen from './FeedbackScreen';

class Container extends Component {
  render() {
    const error = this.props.error.message;
    return (
      <FeedbackScreen
        user={this.props.user}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.init.error,
});


Container.propTypes = {
  user: PropTypes.object,
  error: PropTypes.object,
};

Container.defaultProps = {
  user: null,
  error: null,
};

export default connect(mapStateToProps)(Container);
