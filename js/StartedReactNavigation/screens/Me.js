import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    const { picture, name, email, phone, login, dob, location } = this.props;
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large }}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />
        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />
        <List>
          <ListItem title="Email" rightTitle={email} hideChevron />
          <ListItem title="Phone" rightTitle={phone} hideChevron />
        </List>

        <List>
          <ListItem title="Username" rightTitle={login.username} hideChevron />
        </List>
        <List>
          <ListItem title="Birthday" rightTitle={dob} hideChevron />
          <ListItem title="City" rightTitle={location.city} hideChevron />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
