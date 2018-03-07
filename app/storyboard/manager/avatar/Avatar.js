import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';

import Button from 'react-native-button';
import { ChatForm as Styles, StyleConst } from 'app-style';

export default class Avatar extends Component {
  onLogout = () => {
    if (this.props.onLogout) {
      this.props.onLogout();
    }
  }

  render() {
    return (
      <View>
        <View style={{ flex: 1, alignItems: 'center' }} >
          <Image
            source={require('./user.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View>
          <Button
            containerStyle={{ marginVertical: 15 }}
            onPress={this.onLogout}
          >
            Logout
          </Button>
        </View>
      </View>
    );
  }
}

Avatar.propTypes = {
  onLogout: PropTypes.func,
  error: PropTypes.string,
};

Avatar.defaultProps = {
  onLogout: null,
  error: null,
};
