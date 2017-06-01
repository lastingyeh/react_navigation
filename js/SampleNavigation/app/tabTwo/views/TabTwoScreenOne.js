import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabTwoScreenOne = ({ navigation }) => (
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
      onPress={() => navigation.navigate('TabTwoScreenTwo')}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'blue',
        marginTop: 20
      }}
    >
      <Text>{'Go to next screen this tab'}</Text>
    </TouchableOpacity>

  </View>
);

export default TabTwoScreenOne;
