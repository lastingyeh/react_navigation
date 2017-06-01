import { StackNavigator } from 'react-navigation';

// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';

const routeConfiguration = {
  TabOneScreenOne: { screen: TabOneScreenOne },
  TabOneScreenTwo: { screen: TabOneScreenTwo }
};

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
};

export const NavigatorTabOne = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
