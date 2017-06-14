import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// 1. navigation examples
// import navigation from './SimpleApp/navigationRoutes';
// import navigation from './NestingNavigators/navigationRoutes';
// import navigation from './NavigationPlayground/App';

// 2. redux example
// import navigation from './ReduxExample/';

// 3. started react navigation
// import navigation from './StartedReactNavigation';

// 4. sample navigation
import navigation from './SampleNavigation';

export default () => {
  AppRegistry.registerComponent('react_navigation', () => navigation);
};
