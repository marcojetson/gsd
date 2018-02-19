import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text  style={styles.headerText}>
          GetShitDone
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: '#303F9F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 10
  }
})