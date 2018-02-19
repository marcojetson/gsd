import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
      <View key={i}>
        <Text>{task.title}</Text>
        <Text>{Moment(task.finished).format('YYYY-M-D H:m')}</Text>
      </View>
    ));
  }

  render() {
    return (
      <View>{this.renderHistory()}</View>
    );
  }
}