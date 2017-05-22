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

                                                 

      



                                                              

  

