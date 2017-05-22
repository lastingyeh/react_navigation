import { TabNavigator, StackNavigator } from 'react-navigation';

import RecentChatsScreen from './Component/RecentChatsScreen';
import AllContactsScreen from './Component/AllContactsScreen';
import ChatScreen from './Component/ChatScreen';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats'
};

const NestedApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
});

export default NestedApp;
