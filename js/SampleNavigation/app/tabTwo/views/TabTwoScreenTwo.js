import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabTwoScreenTwo = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>{'Tab Two Screen One'}</Text>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'blue',
        marginTop: 20
      }}
    >
      <Text>{'Go back a screen this tab'}</Text>
    </TouchableOpacity>

  </View>
);

export default TabTwoScreenTwo;
