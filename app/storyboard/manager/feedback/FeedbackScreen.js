import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  TextInput,
  Text,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

import Button from 'react-native-button';
import { ChatForm as Styles, StyleConst } from 'app-style';

import trim from 'lodash/trim';

const { width, height } = Dimensions.get('window');

export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };

    this.channelId = null;
    this.channel = null;
    this.list = [
      {
        id: 1,
        title: 'Feedback',
        icon: '',
      },
      {
        id: 2,
        title: 'Notice Board',
        icon: '',
      },
      {
        id: 3,
        title: 'Alarm Security',
        icon: '',
      },
    ];
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

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, paddingVertical: 25, backgroundColor: 'orange', marginBottom: 2, marginHorizontal: 2 }}>
        <Button
          containerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>
            {item.title}
          </Text>
        </Button>
      </View>
    );
  }


  render() {
    const returnKey = Platform.OS === 'ios' ? 'default' : 'none';

    return (
      <View
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      >

        <FlatList
          ref={(ref) => {
            this.listRef = ref;
          }}
          style={{ flex: 1 }}
          initialNumToRender={10}
          data={this.list}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          extraData={this.list.length}
          onRefreshing={() => {

          }}
          inverted
          refreshing={!this.state.chatAvailable}
          // onRefresh={this.onRefresh}
          // refreshing={this.refreshing}
          windowSize={11}
          numColumns={2}
        />
      </View>
    );
  }
}


FeedbackScreen.propTypes = {
  user: PropTypes.object,
  channelId: PropTypes.string,
  error: PropTypes.string,
  onUpdatePassword: PropTypes.func,
};

FeedbackScreen.defaultProps = {
  user: null,
  channelId: null,
  error: null,
  onUpdatePassword: null,
};
