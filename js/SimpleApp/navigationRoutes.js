import { StackNavigator } from 'react-navigation';

import HomeScreen from './Component/HomeScreen';
import ChatScreen from './Component/ChatScreen';

const navigationRoutes = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

export default navigationRoutes;
