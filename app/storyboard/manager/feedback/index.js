import {
  StackNavigator,
} from 'react-navigation';

import FeedbackContainer from './FeedbackContainer';

const Manager = StackNavigator({
  FeedbackScreen: {
    screen: FeedbackContainer,
    navigationOptions: {
      // header: null,
      headerTitle: 'Feedback',
    },
  },
});

export default Manager;
