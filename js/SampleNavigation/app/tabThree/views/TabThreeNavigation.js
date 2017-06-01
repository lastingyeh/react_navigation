// React
import React from 'react';
// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabThree } from '../navigationConfiguration';
//Redux
import { connect } from 'react-redux';
// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = state => ({ navigationState: state.tabThree });

const TabThreeNavigation = ({ navigationState, dispatch }) => (
  <NavigatorTabThree
    navigation={addNavigationHelpers({
      dispatch: dispatch,
      state: navigationState
    })}
  />
);

TabThreeNavigation.navigationOptions = {
  tabBarLabel: 'Tab Three',
  tabBarIcon: ({ tintColor }) => (
    <Icon size={20} name={'umbrella'} color={tintColor} />
  )
};

export default connect(mapStateToProps)(TabThreeNavigation);
