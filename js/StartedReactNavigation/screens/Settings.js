import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = ({ navigation }) =>
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
  </ScrollView>;

Settings.navigationOptions = props => {
  const { navigation } = props;
  const { refresh } = navigation.state.params;

  return {
    headerLeft: (
      <Icon
        name="ios-arrow-back"
        size={26}
        style={{ paddingLeft: 10, color: '#4d88ff' }}
        onPress={() => {
          refresh();
          navigation.goBack(null);
        }}
      />
    )
  };
};

export default Settings;
