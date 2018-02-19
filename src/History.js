import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';

export default class History extends Component {
  constructor(props) {
    super(props);
  }
  renderHistory() {
    if (!this.props.history) {
      return;
    }

    return this.props.history.map((task, i) => (
      <View key={i} style={styles.container}>
        <Text style={styles.historyText}>{task.title}</Text>
        <Text style={styles.historyText}>{Moment(task.finished).format('D-MM-YYYY H:m')}</Text>
      </View>
    ));
  }

  render() {
    return (
      <View>{this.renderHistory()}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  historyText: {
    fontSize: 15,
    color: '#000'
  }
})