/* @flow */
import React from 'react';
import { Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SampleText from '../component/SampleText';

// default Screen
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

// Home Screen
const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome'
};

// Photo Screen
const MyPhotoScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
);
MyPhotoScreen.navigationOptions = {
  title: 'Photos'
};

// Profile Screen
const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit' ? 'Now Editing' : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);
MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;

  return {
    headerTitle: `${params.name}'s Profile`,
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    )
  };
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotoScreen
  }
});

export default SimpleStack;
