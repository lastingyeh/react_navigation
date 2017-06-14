// React
import React from 'react';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from '../navigationConfiguration';
//Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = state => ({ navigationState: state.tabTwo });

const TabTwoNavigation = ({ navigationState, dispatch }) => (
  <NavigatorTabTwo
    navigation={addNavigationHelpers({ dispatch, state: navigationState })}
  />
);

TabTwoNavigation.navigationOptions = {
  tabBarLabel: 'Tab Two',
  tabBarIcon: ({ tintColor }) => (
    <Icon size={20} name="cogs" color={tintColor} />
  )
};

export default connect(mapStateToProps)(TabTwoNavigation);
