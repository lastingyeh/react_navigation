import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Tile, List, ListItem, Button, Badge } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = { refresh: false };
  }

  refresh = () => {
    this.setState({ refresh: true });
  };

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings', { refresh: this.refresh });
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
        <View>
          <Button
            title="Settings"
            buttonStyle={{ marginTop: 20 }}
            onPress={this.handleSettingsPress}
            borderRadius={10}
          />
          {this.state.refresh &&
            <Badge
              containerStyle={{ backgroundColor: '#ff1a1a' }}
              wrapperStyle={{ position: 'absolute', top: 10, right: 10 }}
              value="N"
              textStyle={{ color: '#ffe6e6' }}
            />}
        </View>

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
