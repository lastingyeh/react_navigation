/* @flow */
import React from 'react';
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
  addNavigationHelpers
} from 'react-navigation';

import SampleText from '../component/SampleText';

// screen template
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

// home screen
const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

// notifications screen
const MyNotificationsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

// settings screen
const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

// custom tabBar
const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state;

  return (
    <View style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// custom tabView
const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state;
  const ActiveScreen = router.getComponentForState(navigation.state);

  return (
    <View style={styles.container}>
      <CustomTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          ...navigation,
          state: routes[index]
        })}
      />
    </View>
  );
};

// TabRouter
const customTabRouter = TabRouter(
  {
    Home: {
      screen: MyHomeScreen,
      path: ''
    },
    Notifications: {
      screen: MyNotificationsScreen,
      path: 'notifications'
    },
    Settings: {
      screen: MySettingsScreen,
      path: 'settings'
    }
  },
  {
    initialRouteName: 'Home'
  }
);

// create CustomTabs
const CustomTabs = createNavigationContainer(
  createNavigator(customTabRouter)(CustomTabView)
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  tabContainer: {
    flexDirection: 'row',
    height: 48
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  }
});

export default CustomTabs;
