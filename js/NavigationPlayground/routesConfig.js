import SimpleStack from './pages/SimpleStack';
import SimpleTabs from './pages/SimpleTabs';
import Drawer from './pages/Drawer';
import TabsInDrawer from './pages/TabsInDrawer';

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
  }
};

export default ExampleRoutes;
