/* @flow */

import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SampleText from '../component/SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('HeaderTest')}
      title="Go to a header toggle screen"
    />
    {navigation.state.routeName === 'HeaderTest' &&
      <Button
        onPress={() =>
          navigation.setParams({
            headerVisible: !navigation.state.params ||
              !navigation.state.params.headerVisible
          })}
        title="Toggle Header"
      />}
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

// home screen
const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome'
};

// profile screen
const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);
MyProfileScreen.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.name}'s Profile!`
});

// create profile navigator
const ProfileNavigator = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Profile: {
      path: 'people/:name',
      screen: MyProfileScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

// headerTest screen
const MyHeaderTestScreen = ({ navigation }) => (
  <MyNavScreen banner={`Full screen view`} navigation={navigation} />
);

MyHeaderTestScreen.navigationOptions = ({ navigation }) => {
  const headerVisible =
    navigation.state.params && navigation.state.params.headerVisible;

  return {
    header: headerVisible ? undefined : null,
    title: 'Now you see me'
  };
};

const ModalStack = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    ProfileNavigator: {
      screen: ProfileNavigator
    },
    HeaderTest: { screen: MyHeaderTestScreen }
  },
  {
    mode: 'modal'
  }
);

export default ModalStack;
