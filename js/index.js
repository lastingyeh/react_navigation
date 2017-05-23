import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// import navigation from './SimpleApp/navigationRoutes';
// import navigation from './NestingNavigators/navigationRoutes';
import navigation from './NavigationPlayground/App';

export default () => {
  AppRegistry.registerComponent('react_navigation', () => navigation);
};
