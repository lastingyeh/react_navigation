/* @flow */
import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      title="Open profile screen"
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
    />
    <Button
      title="Open notifications screen"
      onPress={() => navigation.navigate('NotifSettings')}
    />
    <Button
      title="Go to settings tab"
      onPress={() => navigation.navigate('SettingsTab')}
    />
    <Button title="Go back" onPress={() => navigation.goBack(null)} />
  </ScrollView>
);

// Home Screen
const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

// Profile Screen
const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);

// NotificationsSettings Screen
const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

// Settings Screen
const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

// create TabNav
const TabNav = TabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    SettingsTab: {
      screen: MySettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);

// merge TabNav to StacksOverTabs
const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile`;
    }
  }
});

export default StacksOverTabs;
