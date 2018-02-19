import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, Keyboard } from 'react-native';
import History from './History';

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      left: this.props.duration,
      inProgress: false,
      history: [],
      modalVisible: false
    };
  }

  startTask = () => {
    
    Keyboard.dismiss();
    let inProgress = true;
    this.setState({
      inProgress
    });

  	let interval = setInterval(() => {
      let left = this.state.left - 1;
      this.setState({
        left,
        inProgress
      });
      
      if (left === 0) {
        let history = this.state.history;
        history.push({
        	title: this.state.title,
          finished: new Date()
        })
        inProgress = false;
        this.setState({
        	title: '',
          left: this.props.duration,
          inProgress,
          history,
        })
      	clearInterval(interval)
      }
    }, 1000)
  }

  showButton() {
    if (!!this.state.history.length) {
      return (
        <Button
          onPress={() => this.openModal()}
          title="View task history"
        />
      )
    }
  }

  showCounter() {
    if (!!this.state.inProgress) {
      return (
        <View style={styles.counter}>
          <Text style={styles.counterText}>{this.state.inProgress ? this.state.left : null}</Text>
        </View>
      )
    }
  }

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style={styles.page}>
        <View>
          {this.showCounter()}
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.taskNameInput}
            placeholder="Task Name"
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            />
          <Button
            onPress={this.startTask}
            disabled={!this.state.title || this.state.inProgress}
            title="Start Task"
            />
        </View>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
          >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <History history={this.state.history}/>
              <Button
                onPress={() => this.closeModal()}
                title="Close"
                >
              </Button>
            </View>
          </View>
        </Modal>
        <View style={{padding: 10}}>{this.showButton()}</View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40
  },
  form: {
    backgroundColor: '#FFF',
    elevation: 2,
    padding: 10,
    margin: 10
  },
  taskNameInput: {
    height: 40,
    marginBottom: 15
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    elevation: 2,
    padding: 10,
    margin: 10
  },
  counterText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  innerContainer: {
    alignItems: 'center'
  }
})