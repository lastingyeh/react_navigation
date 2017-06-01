import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabThreeScreenThree = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'brown',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>{'Tab Three Screen Three'}</Text>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'yellow',
        marginTop: 20
      }}
    >
      <Text>{'Go back a screen this tab'}</Text>
    </TouchableOpacity>

  </View>
);

export default TabThreeScreenThree;
