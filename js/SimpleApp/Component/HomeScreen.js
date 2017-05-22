import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    console.log('HomeScreen',HomeScreen.navigationOptions)
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hello, Chat App</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
