/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';

const Stack = StackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  

}, {headerMode: 'false'});

export default Stack;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});
