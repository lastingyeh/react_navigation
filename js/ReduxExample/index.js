/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxExampleApp = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default ReduxExampleApp;
