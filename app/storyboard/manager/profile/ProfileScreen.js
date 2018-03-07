import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  TextInput,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

import Button from 'react-native-button';
import { ChatForm as Styles, StyleConst } from 'app-style';
import { TwilioProfileService } from 'app-service';

import trim from 'lodash/trim';

const { width, height } = Dimensions.get('window');

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };

    this.channelId = null;
    this.channel = null;
    this.messages = [];
  }

  componentWillMount() {
  }

  componentWillReceiveProps(props) {
  }

  // join the channel
  // load messages
  // listen to message added
  onInit = () => {
  }


  render() {
    const returnKey = Platform.OS === 'ios' ? 'default' : 'none';

    return (
      <View
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      >
        <View style={{
          flex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
        }}
        >
          <Image
            source={require('./user.png')}
            style={{ width: 80, height: 80 }}
          />
        </View>
        <View style={Styles.rowWithBorderBottom}>
          <View style={Styles.colFixFirst}>
            <Text style={Styles.textTitle}>
              Password
            </Text>
          </View>
          <View style={Styles.col}>
            <TextInput
              style={Styles.input}
              onChangeText={(value) => {
                this.setState({
                  password: value,
                });
              }}
              autoCorrect={false}
              autoCapitalize={'none'}
              placeholder={'*******'}
            />
          </View>
        </View>
        <View style={Styles.row}>
          <Button
            containerStyle={{
              marginVertical: 15,
              flex: 1,
              backgroundColor: 'orange',
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
            }}
            onPress={() => {
              if (this.props.onUpdatePassword) {
                this.props.onUpdatePassword(this.state.password);
              }
            }}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>
              Update
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}


ProfileScreen.propTypes = {
  user: PropTypes.object,
  channelId: PropTypes.string,
  error: PropTypes.string,
  onUpdatePassword: PropTypes.func,
};

ProfileScreen.defaultProps = {
  user: null,
  channelId: null,
  error: null,
  onUpdatePassword: null,
};
