import React from 'react';
import { Text, View, Platform, Button } from 'react-native';

const AllContactsScreen = ({ navigation }) => (
  <View style={Platform.OS === 'ios' && { marginTop: 20 }}>
    <Text>List of all contacts</Text>
    <Button
      onPress={() => {
        navigation.navigate('Chat', { user: 'Lucy' });
      }}
      title="Chat with Lucy"
    />
  </View>
);

export default AllContactsScreen;
