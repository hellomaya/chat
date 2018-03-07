import React from 'react';
import {
  ScrollView,
} from 'react-native';

import {
  DrawerNavigator,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';

import ChatContainer from './chat/';
import ProfileContainer from './profile/';
import FeedbackContainer from './feedback/';
import UserContainer from './avatar/AvatarContainer';

const DrawerContent = (props) => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <UserContainer />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const Management = DrawerNavigator({
  Chat: {
    screen: ChatContainer,
    navigationOptions: {
      header: null,
    },
  },
  Feedback: {
    screen: FeedbackContainer,
  },
  Profile: {
    screen: ProfileContainer,
  },
}, {
  contentComponent: DrawerContent,
});

export default Management;
