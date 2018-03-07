import {
  StackNavigator,
} from 'react-navigation';

import ChatContainer from './ChatContainer';

const Manager = StackNavigator({
  ChatScreen: {
    screen: ChatContainer,
    navigationOptions: {
      // header: null,
      headerTitle: 'Chat',
    },
  },
});

export default Manager;
