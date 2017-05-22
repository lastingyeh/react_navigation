import React from 'react';
import { View, Text, Button } from 'react-native';

const ChatScreen = ({ navigation }) => (
  <View>
    <Text>Chat with {navigation.state.params.user}</Text>
  </View>
);

// ChatScreen.navigationOptions = ({ navigation }) => ({
//   title: `Chat with ${navigation.state.params.user}`
// });

// add headerRight opt
ChatScreen.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  const isInfo = state.params.mode === 'info';
  const { user } = state.params;

  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })}
      />
    )
  };
};

export default ChatScreen;
