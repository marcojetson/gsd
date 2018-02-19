import React, { Component } from 'react';
import All from './All';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class MainApp extends Component {

  render() {
    return (
      <View>
        <All duration="5" />
      </View>
    );
  }

}
