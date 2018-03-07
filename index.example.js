/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Login from "./js/components/Login";
import EventsLog from "./js/components/EventsLog";
import Log from "./js/logging";
import ApnSupport from "./js/ApnsSupportModule";
import ChatClientHelper from "./js/chat-client-helper";

ngrokSubdomainName = require('./configuration.json').ngrokSubdomain;
// const host = 'http://' + ngrokSubdomainName + '.ngrok.io';
const host = 'http://localhost:3000';

export default class TwilioChatJsReactNative extends Component {

  state = {
    chatClientHelper: null,
    log: []
  };

  login(username, host) {
    let log = new Log(this.addNewLog.bind(this));
    let chatClientHelper = new ChatClientHelper(host, log);
    chatClientHelper.login(
      username, 'apns', ApnSupport.registerForPushCallback, ApnSupport.showPushCallback);
    this.setState({ chatClientHelper });
  }

  addNewLog(string) {
    let log = this.state.log;
    log.push(string + "\n");
    this.setState({ log });
  }

  render() {
    if (this.state.chatClientHelper === null) {
      return (
        <Login host={ host } login={ this.login.bind(this) }/>
      );
    } else {
      return (
        <EventsLog eventslog={ this.state.log } />
      );
    }
  }
}

AppRegistry.registerComponent('TwilioChatJsReactNative', () => TwilioChatJsReactNative);
