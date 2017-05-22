import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    console.log('ChatScreen',ChatScreen.navigationOptions)
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

export default ChatScreen;
