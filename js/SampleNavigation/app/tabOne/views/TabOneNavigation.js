import React from 'react';
import { addNavigationHelpers } from 'react-navigation';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigatorTabOne } from '../navigationConfiguration';

const mapStateToProps = state => ({
  navigationState: state.tabOne
});

const TabOneNavigation = ({ navigationState, dispatch }) => (
  <NavigatorTabOne
    navigation={addNavigationHelpers({ dispatch, state: navigationState })}
  />
);

TabOneNavigation.navigationOptions = {
  tabBarLabel: 'Tab One',
  tabBarIcon: ({ tintColor }) => (
    <Icon size={20} name="cogs" color={tintColor} />
  )
};

export default connect(mapStateToProps)(TabOneNavigation);
