import React from 'react';
import { Text, View, Platform, Button } from 'react-native';

const RecentChatsScreen = ({ navigation }) => (
  <View style={Platform.OS === 'ios' && { marginTop: 20 }}>
    <Text>List of recent chats</Text>
    <Button
      onPress={() => {
        navigation.navigate('Chat', { user: 'Jimmy' });
      }}
      title="Chat with Jimmy"
    />
  </View>
);

export default RecentChatsScreen;
