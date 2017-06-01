import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabThreeScreenTwo = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>{'Tab Three Screen Two'}</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('TabThreeScreenThree')}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'yellow',
        marginTop: 20
      }}
    >
      <Text>{'Go to screen three'}</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'deeppink',
        marginTop: 20
      }}
    >
      <Text>{'Go back a screen this tab'}</Text>
    </TouchableOpacity>

  </View>
);

export default TabThreeScreenTwo;
