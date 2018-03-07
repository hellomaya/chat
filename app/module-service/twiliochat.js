'use strict';

import 'react-native';
import { Client as TwilioChatClient } from 'twilio-chat';
import { AccessManager as TwilioAccessManager } from 'twilio-common';

// https://media.twiliocdn.com/sdk/js/chat/releases/2.1.0/docs/Channel.html
// https://www.twilio.com/docs/api/chat
// https://media.twiliocdn.com/sdk/js/chat/v2.1/docs/

const SERVICE_HOST = 'http://localhost:8000';
const TEST_CHANNEL_ID = 'generallabcd';

class TwilioChatService {
  host;
  log;
  client;
  accessManager;
  channels = {};

  TEST_CHANNEL_ID = TEST_CHANNEL_ID;

  addChannel(ch) {
    this.channels[ch.sid] = ch;
  }

  getChannelById(id) {
    return this.channels[id];
  }

  /**
   * constructor
   *
   * @param tokenAndConfigurationProviderHost
   * @param log
   */
  constructor(tokenAndConfigurationProviderHost) {
    this.host = tokenAndConfigurationProviderHost;
    // this.log = log;
    this.client = null;
    this.accessManager = null;
  }

  logout() {
    const keys = Object.keys(this.channels);

    keys.forEach((key) => {
      if (this.channels[key]) {
        this.channels[key].leave();
      }
    });

    this.client = null;
    this.channels = {};
  }

  /**
   * To login into the twilio chat service
   *
   * @param identity The current user identity, name or email whatever
   * @param pushChannel The channel to support push notification
   * @param registerForPushCallback
   * @param showPushCallback
   */
  login(identity, onSuccess, onError, pushChannel, registerForPushCallback, showPushCallback) {
    const that = this;

    return fetch(`${this.host}/chat-client-configuration.json`)
      .then((response) => {
        const chatClientConfig = response;
        console.log('login', 'Got Chat client configuration', chatClientConfig);

        return this.getToken(identity, pushChannel)
          .then(({ token }) => {
            console.log('ChatClientHelper', 'got chat token', token);

            return TwilioChatClient.create(token, chatClientConfig.options || {})
              .then((chatClient) => {
                that.client = chatClient;
                that.accessManager = new TwilioAccessManager(token);

                // update or renew token
                that.accessManager.on(
                  'tokenUpdated',
                  am => that.client.updateToken(am.token),
                );

                that.accessManager.on(
                  'tokenExpired',
                  () => that.getToken(identity, pushChannel)
                    .then(newData => that.accessManager.updateToken(newData)),
                );

                // support push notification by twilio
                that.client.on(
                  'pushNotification',
                  (obj) => {
                    if (obj && showPushCallback) {
                      // showPushCallback(that.log, obj);
                    }
                  },
                );

                that.subscribeToAllAccessManagerEvents();
                // that.subscribeToAllChatClientEvents();

                onSuccess(that.client);

                // try to register push notification in app
                if (registerForPushCallback) {
                  // registerForPushCallback(that.log, that.client);
                }
              });
          })
          .catch((err) => {
            console.log('login', 'can\'t get token', err);
            onError(err);
          });
      })
      .catch((err) => {
        console.log('login', 'can\'t fetch Chat Client configuration', err);
        onError(err);
      });
  }

  /**
   * To get token from local server
   *
   * @param identity the user identity - name, email or else
   * @param pushChannel the channel to support push notification
   */
  getToken(identity, pushChannel) {
    if (!pushChannel) {
      pushChannel = 'none';
    }
    return fetch(`${this.host}/token?identity=${identity}&pushChannel=${pushChannel}`)
      .then(response => response.json());
  }

  subscribeToAllAccessManagerEvents() {
    this.accessManager.on('tokenUpdated', obj => console.log('ChatClientHelper.accessManager', 'tokenUpdated', obj));
    this.accessManager.on('tokenExpired', obj => console.log('ChatClientHelper.accessManager', 'tokenExpired', obj));
  }

  subscribeToAllChatClientEvents() {
    this.client.on('userSubscribed', obj => console.log('ChatClientHelper.client', 'userSubscribed', obj));
    this.client.on('userUpdated', obj => console.log('ChatClientHelper.client', 'userUpdated', obj));
    this.client.on('userUnsubscribed', obj => console.log('ChatClientHelper.client', 'userUnsubscribed', obj));
    this.client.on('channelAdded', obj => console.log('ChatClientHelper.client', 'channelAdded', obj));
    this.client.on('channelRemoved', obj => console.log('ChatClientHelper.client', 'channelRemoved', obj));
    this.client.on('channelInvited', obj => console.log('ChatClientHelper.client', 'channelInvited', obj));
    this.client.on('channelJoined', obj => console.log('ChatClientHelper.client', 'channelJoined', obj));
    this.client.on('channelLeft', obj => console.log('ChatClientHelper.client', 'channelLeft', obj));
    this.client.on('channelUpdated', obj => console.log('ChatClientHelper.client', 'channelUpdated', obj));
    this.client.on('memberJoined', obj => console.log('ChatClientHelper.client', 'memberJoined', obj));
    this.client.on('memberLeft', obj => console.log('ChatClientHelper.client', 'memberLeft', obj));
    this.client.on('memberUpdated', obj => console.log('ChatClientHelper.client', 'memberUpdated', obj));
    this.client.on('messageAdded', obj => console.log('ChatClientHelper.client', 'messageAdded', obj));
    this.client.on('messageUpdated', obj => console.log('ChatClientHelper.client', 'messageUpdated', obj));
    this.client.on('messageRemoved', obj => console.log('ChatClientHelper.client', 'messageRemoved', obj));
    this.client.on('typingStarted', obj => console.log('ChatClientHelper.client', 'typingStarted', obj));
    this.client.on('typingEnded', obj => console.log('ChatClientHelper.client', 'typingEnded', obj));
    this.client.on('connectionStateChanged', obj => console.log('ChatClientHelper.client', 'connectionStateChanged', obj));
    this.client.on('pushNotification', obj => console.log('ChatClientHelper.client', 'onPushNotification', obj));
  }
}

const service = new TwilioChatService(SERVICE_HOST);
export default service;
