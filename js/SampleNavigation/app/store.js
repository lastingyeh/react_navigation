import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import logger from 'redux-logger';

// navigation
import { TabBar, tabBarReducer } from './tabBar/navigationConfiguration';
import { NavigatorTabOne } from './tabOne/navigationConfiguration';
import { NavigatorTabTwo } from './tabTwo/navigationConfiguration';
import { NavigatorTabThree } from './tabThree/navigationConfiguration';

// use redux dev-tools
const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// const middleware = () => applyMiddleware(logger);

const enhancer = composeEnhancers(applyMiddleware(logger));

export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state, action) =>
      NavigatorTabOne.router.getStateForAction(action, state),
    tabTwo: (state, action) =>
      NavigatorTabTwo.router.getStateForAction(action, state),
    tabThree: (state, action) =>
      NavigatorTabThree.router.getStateForAction(action, state)
  }),
  enhancer
);
