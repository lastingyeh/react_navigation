import React from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from '../navigationConfiguration';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  navigationState: state.tabBar
});

// reducer state.tabBar injects 'dispatch' && 'state' with addNavigationHelplers -> 
// to TabBar props of navigation (as TabBarNavigator)
const TabBarNavigation = ({ dispatch, navigationState }) => (
  <TabBar
    navigation={addNavigationHelpers({ dispatch, state: navigationState })}
  />
);

export default connect(mapStateToProps)(TabBarNavigation);
