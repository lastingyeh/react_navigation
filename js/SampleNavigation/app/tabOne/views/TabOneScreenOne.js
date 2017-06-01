import React from 'react';
import { View, Text, Button } from 'react-native';

const TabOneScreenOne = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text>{'Tab One Screen One'}</Text>
    <Button
      onPress={() => navigation.navigate('TabOneScreenTwo')}
      style={{
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'yellow',
        marginTop: 20
      }}
      title="Go to next screen this tab"
    />
  </View>
);

export default TabOneScreenOne;