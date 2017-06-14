import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// screens
import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed'
    }
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    })
  }
});

export const MeStacks = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="list" size={35} color={tintColor} />
    }
  },
  MeStacks: {
    screen: MeStacks,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="account-circle" size={35} color={tintColor} />
    }
  }
});

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Settings: {
      screen: MeStacks
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

// Entry Screen
// - Tabs:Tabs
//    - FeedStack
//      - Feed:Feed
//      - Details:UserDetails
//        - as onPress = ()=>navigation.navigate('Details',{...user})
//    - Me:Me
// - Settings:SettingStack
//  - Settings:Settings
