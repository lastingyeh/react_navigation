import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

const Settings = ({ navigation }) => (
  <ScrollView>
    <List>
      <ListItem title="Notifications" />
      <ListItem title="Profile" />
      <ListItem title="Password" />
    </List>
    <List>
      <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} />
      <Button title="Back" onPress={() => navigation.goBack(null)} />
    </List>
  </ScrollView>
);

export default Settings;
