import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabThreeScreenOne = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'aqua',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>Tab Three Screen One</Text>
    <TouchableOpacity
      onPress={() => navigation.navigate('TabThreeScreenTwo')}
      style={{ padding: 20, borderRadius: 20, backgroundColor: 'yellow' }}
    >
      <Text>Go to next screen this tab</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() =>
        navigation.dispatch({ type: 'JUMP_TO_TAB', payload: { index: 0 } })}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'deeppink',
        marginTop: 20
      }}
    >
      <Text>jump to tab one</Text>
    </TouchableOpacity>
  </View>
);

export default TabThreeScreenOne;
