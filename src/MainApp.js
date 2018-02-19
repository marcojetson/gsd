import React, { Component } from 'react';
import All from './All';
import Header from './Header';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class MainApp extends Component {

  render() {
    return (
      <View style={{
        flex: 1, 
        backgroundColor: '#F5F6F7'
        }}>
        <Header />
        <All duration="5" />
      </View>
    );
  }

}
