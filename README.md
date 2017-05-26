## React Navigation

### install

  npm i --save react-navigation 
  
  *(current @1.0.0-beta.10) -> avoid console shows 'warning BackAndroid is deprecated'

### SimpleApp

  1. import {StackNavigator} from 'react-navigation'

  2. create pages 

    2.1 create 'HomeScreen' component
    2.2 create 'navigationOptions' -> {title:'Page title'}
    2.3 put 'HomeScreen' to 'StackNavigator' -> StackNavigator({Home:{screen:HomeScreen}})

  3. add page

    3.1 create 'ChatScreen' component
    3.2 create 'navigationOptions -> {title:'NewPage Title'}
    3.3 2.3 put 'ChatScreen' to 'StackNavigator' -> StackNavigator({Home:{screen:HomeScreen}}),
                                                                   {Chat:{screen:ChatScreen}})

  4. navigate page 
  
    4.1 get const { navigate } = this.props.navigation;

    4.2 call func && and bring params '{user:'Lucy'}' to ChatScreen -> () => navigate('Chat', { user: 'Lucy' })

    4.3 in ChatScreen receive params

      4.3.1 get const { params } = this.props.navigation.state;

      4.3.2 get 'params.user'

    4.4 navigationOptions can be func, and it gets params from prev-pages

      4.4.1 static navigationOptions = ({ navigation }) => ({
              title: `Chat with ${navigation.state.params.user}`
            });

### NestingNavigators

  1. page structure

    StackNavigator - 

      Home:{screen : TabNavigator - RecentChatScreen
                                  - AllContactsScreen}
      
      Chat:{screen : ChatScreen}

  2. create pages

    2.1 import {TabNavigator} from 'react-nativgation'
    2.2 const MainScreenNavigator = TabNavigator({
                                      Recent: { screen: RecentChatsScreen },
                                      All: { screen: AllContactsScreen },
                                    }); 
    2.3 const NestedApp = StackNavigator({
                            Home:{screen:MainScreenNavigator},
                            Chat:{screen:ChatScreen}
                          })  
    2.4 'Home' title given
        MainScreenNavigator.navigationOptions={title:'My Chats'}

    2.5 as if navigate to Chat,it implements 'onPress' at 'Button' in 'RecentChatsScreen' and 'AllContactsScreen' 
        like as '<Button onPress={() => {navigation.navigate('Chat', { user: 'Jimmy' });}}
                  title="Chat with Jimmy"/>'

    2.6 configuring the Header

      2.6.1 add right button

          static navigationOptions = {
            headerRight:<Button title="Info"/>
          }

      2.6.2 as setting params func of 'setParams'

          2.6.2.1 const {state,setParams} = navigation;

          2.6.2.2 setParams({mode:isInfo?'none':'info'})

          2.6.2.3 as isInfo = true -> state.params.mode = 'info' or not = 'none'

### Navigator Props

  1. navigation

    1.1 dispatch:func -> send an action to router

      1.1.1 get 'NavigationActions' -> import { NavigationActions } from 'react-navigation'
      1.1.2 create action -> const navigateAction = NavigationActions.navigate({
                                routeName:'Profile',
                                params:{},
                                action:NavigationActions.navigate({routeName:'SubProfileRoute'})
                              })
      1.1.3 call dispatch -> this.props.navigation.dispatch(navigateAction)

    1.2 goBack:func -> (helper) close active screen and move back

      1.2.1 goBack() -> go back from this Home Screen 
      1.2.2 goBack(null) -> go back anywhere
      1.2.3 goBack('screen123') -> go back from screen123

    1.3 navigate(routeName,params,action):func ->  (helper) link to other screens

    1.4 setParams({key,value}):func -> (helper) make changes to route's params

    1.5 state -> screen's current state/routes

### StackNavigator

  1. get 'StackNavigator' -> import { StackNavigator } from 'react-navigation'

  2. const AppNavigator = StackNavigator(*RouteConfigs,*StackNavigatorConfig)

    2.1 *RouteConfigs 
        
        {SimpleStack:{screen:SimpleStack},Index:{screen:MainScreen}}

    2.2 *StackNavigatorConfig = 
    
        {initialRouteName: 'Index',
          headerMode: 'none',
          mode: Platform.OS === 'ios' ? 'modal' : 'card'}

    2.3 'Index' symbol -> default Screen,it must match initialRouteName:'Index' to Index:{screen:MainScreen}

### TabNavigator

  1. get 'TabNavigator' -> import { TabNavigator } from 'react-navigation'

  2. const AppNavigator = TabNavigator(*RouteConfigs,*TabNavgatorConfig)

    2.1 *RouteConfigs as the same as 'StackNavigator'

    2.2 *TabNavgatorConfig 
        
        {
          tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
          }
        }
    
  3. Screen settings

      MyScreen.navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      };

  4. add Icon

    4.1 npm i --save-dev react-native-vector-icons
    4.2 react-native link react-native-vector-icons || rnpm link
    4.3 restart run app

### DrawerNavigator

  1. get 'DrawerNavigator' -> import { DrawerNavigator } from 'react-navigation'

  2. const DrawerExample = DrawerNavigator(*RouterConfigs,*DrawerNavigatorConfig)

    2.1 *RouteConfigs as the same as 'StackNavigator'

    2.2 *DrawerNavigatorConfig
        
        *DrawerNavigatorConfig = {
          initialRouteName: 'Drafts',
          contentOptions: {
            activeTintColor: '#e91e63'
          }
        }

        2.2.1 custom Drawer Content

          2.2.1.1 get DrawerItems

            import {DrawerItems} from 'react-navigation'
            
          2.2.1.2 use contentComponent at DrawerNavigatorConfig 

            contentComponent:props=><ScrollView><DrawerItems {...props}/></ScrollView>

  3. Screen settings
      
      DraftsScreen.navigationOptions = {
        drawerLabel: 'Drafts',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
        )
      };

  4. add Icon

    4.1 import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
    
    4.2 <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}/>

### TabsInDrawer

  1. project structure

    1.1 DrawerNavigator(*routeConfigs)
      
        *routeConfigs

        - SimpleTabs({screen,navigationOptions:{drawer:{label,icon}}})

          TabNavigator(*routeConfigs)
          
          *routeConfigs
            
            - Home({screen,path})

            - People({screen,path})

            - Chat({screen,path})

            - Settings({screen,path})
        
        - StacksOverTabs({screen,navigationOptions:{drawer:{label,icon}}})

          *routeConfigs

          - Root({screen})

            TabNavigator(*routeConfigs,*TabNavigatorConfig)

            *routeConfigs

              - MainTab({screen,path,navigation:{title,tabBarLabel,tabBarIcon}})

              - SettingsTab({screen,path,navigation:{title,tabBarLabel,tabBarIcon}})

            *TabNavigatorConfig({tabBarPosition,animationEnabled,swipeEnabled})

          - NotifSettings({screen,navigationOptions:{title}})

          - Profile({screen,navigationOptions:{title}})

### CustomTabs

  1. create screen

      - MyHomeScreen

      - MyNotificationsScreen

      - MySettingsScreen

  2. create custom view for tabBars use

      const CustomTabBar = ({ navigation }) => {
        const { routes } = navigation.state;

        return (
          <View style={styles.tabContainer}>
            {routes.map(route => (
              <TouchableOpacity
                onPress={() => navigation.navigate(route.routeName)}
                style={styles.tab}
                key={route.routeName}
              >
                <Text>{route.routeName}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      };

  3. set tabBars to merge with customTabView

      const CustomTabView = ({ router, navigation }) => {
        const { routes, index } = navigation.state;
        const ActiveScreen = router.getComponentForState(navigation.state);

        return (
          <View style={styles.container}>
            <CustomTabBar navigation={navigation} />
            <ActiveScreen
              navigation={addNavigationHelpers({
                ...navigation,
                state: routes[index]
              })}
            />
          </View>
        );
      };

  4. create TabRouter

      4.1 import { TabRouter } from 'react-navigation'

      4.2 set customTabRouter

        const customTabRouter = TabRouter(
          {
            Home: {
              screen: MyHomeScreen,
              path: ''
            },
            Notifications: {
              screen: MyNotificationsScreen,
              path: 'notifications'
            },
            Settings: {
              screen: MySettingsScreen,
              path: 'settings'
            }
          },
          {
            initialRouteName: 'Home'
          }
        );

      4.3 create TabNavigator

        4.3.1 import { createNavigationContainer,createNavigator } from 'react-navigation'

        4.3.2 create TabNavigator

          const CustomTabs = createNavigationContainer(
            createNavigator(customTabRouter)(CustomTabView)
          );
    
    5. memo

      5.1 addNavigationHelpers -> augment our navigation prop

        5.1.1 demo
          
          addNavigationHelpers({...navigation},state:route[index])

      5.2 TabRouter -> set of tabs,handle jumping to tabs, and handle the back button press to jump to the initial tab.

        5.2.1 demo

          const customTabRouter = TabRouter(
          {
            Home: {
              screen: MyHomeScreen,
              path: ''
            },
            Notifications: {
              screen: MyNotificationsScreen,
              path: 'notifications'
            },
            Settings: {
              screen: MySettingsScreen,
              path: 'settings'
            }
          },
          {
            initialRouteName: 'Home'
          }
        );

      5.3 createNavigator -> combines a router and a navigation view

        5.3.1 demo

          createNavigator(customTabRouter)(CustomTabView)

      5.4 createNavigationContainer -> be usable as a top-level component,it makes navigator act like a top-level navigator when the navigation prop is missing.It will manage the app state, and integrate with app-level nav features, like handling incoming and outgoing links, and Android back button behavior.

        5.4.1 demo

          const CustomTabs = createNavigationContainer(
            createNavigator(customTabRouter)(CustomTabView)
          );

### DeepLink (like as redirect to path)

  1. deep link to specific path

    1.1 StackNavigator / StackNavigator

      1.1.1 parent StackNavigator
      
      LinkTabs:{
        name: 'Link in Stack',
        description: 'Deep linking into a route in stack',
        screen: SimpleStack,
        path: 'people/Jordan'
      }

      1.1.2 children StackNavigator

      const SimpleStack = StackNavigator({
        Home: {
          screen: MyHomeScreen
        },
        Profile: {
          path: 'people/:name',
          screen: MyProfileScreen
        },
        Photos: {
          path: 'photos/:name',
          screen: MyPhotoScreen
        }
      });

      1.1.3 output

      As mapping to path 'people/:name',and Redirect to MyProfileScreen

    1.2 StackNavigator / TabNavigator

      1.2.1 parent StackNavigator

      LinkTabs: {
        name: 'Link to Settings Tab',
        description: 'Deep linking into a route in tab',
        screen: SimpleTabs,
        path: 'settings'
      }

      1.2.2 children TabNavigator

      const SimpleTabs = TabNavigator(
        {
          Home: {
            screen: MyHomeScreen,
            path: ''
          },
          People: {
            screen: MyPeopleScreen,
            path: 'cart'
          },
          Chat: {
            screen: MyChatScreen,
            path: 'chat'
          },
          Settings: {
            screen: MySettingsScreen,
            path: 'settings'
          }
        },
        {
          tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
            showIcon: true
          }
        }
      );

      1.2.3 output

      match path 'settings',and redirect to MySettingsScreen

### ReduxExample

  1. project structure

    <AppWithNavigationState>
      - <AppNavigator>
        - StackNavigator
          - LoginScreen
          - MainScreen
            - LoginStatusMessage
            - AuthButton 
          - ProfileScreen

  2. dispatch (navigation)

    2.1 at LoginScreen,the 'navigation.dispatch' of props brings to 'Reducer' without self-defined 'Action'

    2.3 at reducer

      2.3.1 defined initialState for navigationState

        2.3.1.1 get action

          const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
          
        2.3.1.2 get state

          const firstAction = AppNavigator.router.getActionForPathAndParams('Main');

          const tempNavState = AppNavigator.router.getStateForAction(firstAction);

        2.3.1.3 create initialNavState

          const initialNavState = AppNavigator.router.getStateForAction(
            secondAction,
            tempNavState
          );

      2.3.2 define nextState to navigate

        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );



                                                 

      



                                                              

  

