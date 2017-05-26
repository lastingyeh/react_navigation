import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <Button
    onPress={isLoggedIn ? logout : loginScreen}
    title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
