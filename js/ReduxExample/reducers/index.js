import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// nav reducer
// get action from 'Main'

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');

// get temp state from action
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

// getStateForAction(action,lastState)
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const nav = (state = initialNavState, action) => {
  let nextState;

  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

// auth reducer
const initialAuthState = { isLoggedIn: false };

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

// combined-reducer
const AppReducer = combineReducers({
  nav,
  auth
});

export default AppReducer;
