import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Init } from 'app-redux';

import ChatScreen from './ChatScreen';

const { onInit } = Init;

class Container extends Component {
  render() {
    const error = this.props.error.message;
    return (
      <ChatScreen
        onInit={this.props.onInit}
        channelId={this.props.channelId}
        user={this.props.user}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.init.error,
  channelId: state.init.channelId,
});

const mapDispatchToProps = dispatch => ({
  onInit: onInit(dispatch),
});

Container.propTypes = {
  onInit: PropTypes.func,
  channelId: PropTypes.string,
  user: PropTypes.object,
  error: PropTypes.object,
};

Container.defaultProps = {
  onInit: null,
  channelId: null,
  user: null,
  error: null,
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
