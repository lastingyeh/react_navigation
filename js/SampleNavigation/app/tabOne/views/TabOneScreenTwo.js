import React from 'react';
import { View, Text, Button } from 'react-native';

const TabOneScreenTwo = ({ navigation }) => (
  <View
    style={{
      flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
    }}
  >
    <Text>{'Tab One Screen Two'}</Text>
    <Button
      onPress={() => navigation.goBack()}
      style={{
        padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
      }}
      title="Go back a screen this tab"
    />
  </View>
);

export default TabOneScreenTwo;
