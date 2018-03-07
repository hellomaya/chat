import {
  StackNavigator,
} from 'react-navigation';

import ProfileContainer from './ProfileContainer';

const Manager = StackNavigator({
  ProfileScreen: {
    screen: ProfileContainer,
    navigationOptions: {
      // header: null,
      headerTitle: 'Profile',
    },
  },
});

export default Manager;
