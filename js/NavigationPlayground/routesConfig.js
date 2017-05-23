import SimpleStack from './component/SimpleStack';
import SimpleTabs from './component/SimpleTabs'

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
  }
};

export default ExampleRoutes;
