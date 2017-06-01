import React from 'react';

import { Provider } from 'react-redux';
import store from './app/store';

// Navigation
import TabBarNavigation from './app/tabBar/views/TabBarNavigation';

class SampleNavigation extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    );
  }
}

export default SampleNavigation;
