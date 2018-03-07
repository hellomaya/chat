import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  TextInput,
  Text,
  ActivityIndicator,
  Dimensions,
  Platform,
} from 'react-native';

import Button from 'react-native-button';
import { ChatForm as Styles, StyleConst } from 'app-style';
import { TwilioChatService } from 'app-service';

import trim from 'lodash/trim';

const { width, height } = Dimensions.get('window');

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatAvailable: false,
      message: '',
      loadingText: 'Connecting',
    };

    this.channelId = null;
    this.channel = null;
    this.messages = [];
  }

  componentWillMount() {
    this.onInit();
  }

  componentWillReceiveProps(props) {
    console.log('==> will be new props');
    console.log(props);

    if (!this.error && (!this.channel ||
      this.channel && props.channelId !== this.channel.sid)) {
      this.channelId = props.channelId;
      this.onRegister();
    }

    if (props.error) {
      this.setState({
        chatAvailable: true,
      });
    }

    if (!props.user) {
      this.messages = [];
      this.channel = null;
      this.channelId = null;
    }
  }

  // join the channel
  // load messages
  // listen to message added
  onInit = () => {
    if (this.props.onInit) {
      this.props.onInit(this.props.user.email, TwilioChatService.TEST_CHANNEL_ID);
    }
  }

  onRegister = () => {
    this.channel = TwilioChatService.getChannelById(this.channelId);
    if (this.channel) {
      this.channel.on('messageAdded', (message) => {
        this.messages = [{
          id: message.sid,
          author: message.author,
          text: message.body,
        }, ...this.messages];
        this.setState({
          message: '',
        });
      });

      this.setState({
        loadingText: 'Loading...',
      });
      this.channel.getMessages()
        .then((page) => {
          let messages = [];
          page.items.forEach((message) => {
            messages.push({
              id: message.sid,
              author: message.author,
              text: message.body,
            });
          });
          messages = messages.reverse();
          this.messages = [...messages];
          this.setState({
            chatAvailable: true,
          });
        })
        .catch((error) => {
          alert('Cant get chat room message');
        });
    }
  }

  onSendMessage = () => {
    if (!this.state.chatAvailable) {
      return;
    }

    if (this.channel) {
      const message = trim(this.state.message);
      if (message === '') {
        return;
      }
      this.channel.sendMessage(message);
    }
  }

  renderLoading = () => {
    if (this.state.chatAvailable) {
      return null;
    }

    return (
      <View style={{ alignItems: 'center' }} >
        <ActivityIndicator
          style={{ marginTop: 80 }}
          size={'large'}
        />
        <Text>
          {this.state.loadingText}
        </Text>
      </View>
    );
  }

  renderItem = (row) => {
    const item = row.item;
    const author = row.item.author;
    let messageEl = (
      <View
        style={{
          flex: 0,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            margin: 5,
            flex: 0,
            paddingHorizontal: 5,
            // width: width * 0.7,
            marginRight: 30,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              backgroundColor: '#F7F7F7',
              padding: 5,
            }}
          >
            <Text style={{
              color: 'black',
              fontSize: 13,
              flex: 0,
              paddingLeft: 5,
              fontStyle: 'italic',
            }}
            >
              {item.author}
            </Text>
            <Text style={{
              color: 'black',
              fontSize: 15,
              flex: 0,
              padding: 5,
            }}
            >
              {item.text}
            </Text>
          </View>
          <View style={{ flex: 1 }} >
          </View>
        </View>
      </View>
    );

    if (author === this.props.user.email) {
      messageEl = (
        <View
          style={{
            flex: 1,
            paddingVertical: 5,
            alignItems: 'flex-end',
          }}
        >
          <View
            style={{
              margin: 5,
              flex: 0,
              paddingHorizontal: 5,
              width: width * 0.7,
              alignItems: 'flex-end',
            }}
          >
            <View style={{ flex: 1 }} >
            </View>
            <Text style={{
              color: 'black',
              fontSize: 15,
              backgroundColor: '#bbdaf7',
              flex: 0,
              padding: 5,
            }}
            >
              {item.text}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={{
        transform: [
          { scaleY: -1 },
        ],
        flex: 1,
      }}
      >
        {messageEl}
      </View>
    );
  }

  render() {
    const returnKey = Platform.OS === 'ios' ? 'default' : 'none';

    return (
      <View
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
      >
        {this.renderLoading()}
        <View style={{ flex: 1 }} >
          <FlatList
            ref={(ref) => {
              this.listRef = ref;
            }}
            style={{
              flex: 1,
              transform: [
                {
                  scaleY: -1,
                },
              ],
            }}
            initialNumToRender={10}
            data={this.messages}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            extraData={this.messages.length}
            onRefreshing={() => {

            }}
            inverted
            refreshing={!this.state.chatAvailable}
            // onRefresh={this.onRefresh}
            // refreshing={this.refreshing}
            windowSize={11}
          />
        </View>
        <View style={Styles.form} >
          <View style={Styles.row} >
            <View style={Styles.col} >
              <TextInput
                value={this.state.message}
                autoCorrect={false}
                autoCapitalize={'none'}
                onChangeText={(value) => {
                  this.setState({
                    message: value,
                  });
                }}
                returnKeyType={returnKey}
                onSubmitEditing={this.onSendMessage}
                style={Styles.inputText}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={Styles.colFixLast} >
              <Button
                onPress={this.onSendMessage}
              >
                {StyleConst.IconSend}
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


ChatScreen.propTypes = {
  user: PropTypes.object,
  onInit: PropTypes.func,
  channelId: PropTypes.string,
  error: PropTypes.string,
};

ChatScreen.defaultProps = {
  user: null,
  onInit: null,
  channelId: null,
  error: null,
};
