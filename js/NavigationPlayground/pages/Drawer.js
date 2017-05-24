/* @flow */
import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import SampleText from '../component/SampleText';

// default screen
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

// inbox screen
const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner="Inbox Screen" navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  )
};

// drafts screen
const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner="Drafts Screen" navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  )
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen
    }
  },
  {
    contentComponent: props => (
      <ScrollView style={styles.container}>
        <Text>Hello</Text><DrawerItems {...props} />
      </ScrollView>
    ),
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export default DrawerExample;
