import { Platform } from 'react-native';

import SimpleStack from './pages/SimpleStack';
import SimpleTabs from './pages/SimpleTabs';
import Drawer from './pages/Drawer';
import TabsInDrawer from './pages/TabsInDrawer';
import CustomTabs from './pages/CustomTabs';
import ModalStack from './pages/ModalStack';
import StacksInTabs from './pages/StacksInTabs';
import StacksOverTabs from './pages/StacksOverTabs';

const ExampleRoutes = {
  SimpleStack: {
    name: 'Stack Example',
    description: 'A card stack',
    screen: SimpleStack
  },
  SimpleTabs: {
    name: 'Tabs Example',
    description: 'Tabs following platform conventions',
    screen: SimpleTabs
  },
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer
  },
  TabsInDrawer: {
    name: 'Draser + Tabs Example',
    description: 'A drawer combined with tabs',
    screen: TabsInDrawer
  },
  CustomTabs: {
    name: 'Custom Tabs',
    description: 'Custom tabs with tab router',
    screen: CustomTabs
  },
  ModalStack: {
    name: Platform.OS === 'ios'
      ? 'Modal Stack Example'
      : 'Stack with Dynamic Header',
    description: Platform === 'ios'
      ? 'Stack navigation with modals'
      : 'Dynamically showing and hiding the header',
    screen: ModalStack
  },
  StacksInTabs: {
    name: 'Stacks in Tabs',
    description: 'Nested stack navigation in tabs',
    screen: StacksInTabs
  },
  StacksOverTabs: {
    name: 'Stacks over Tabs',
    description: 'Nested stack navigation that pushes on top of tabs',
    screen: StacksOverTabs
  },
  LinkStack: {
    name: 'Link in Stack',
    description: 'Deep linking into a route in stack',
    screen: SimpleStack,
    path: 'people/Jordan'
  },
  LinkTabs: {
    name: 'Link to Settings Tab',
    description: 'Deep linking into a route in tab',
    screen: SimpleTabs,
    path: 'settings'
  }
};

export default ExampleRoutes;
