import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import Header from './Header';
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

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style={styles.form}>
        <Header />
        <View>
          <TextInput
            style={styles.taskNameInput}
            placeholder="Task Name"
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />
          <Button
            onPress={this.startTask}
            style={styles.startButton}
            disabled={!this.state.title || this.state.inProgress}
            title="Start Task"
            />
        </View>
        <Text>
          {this.state.inProgress ? this.state.left : null}
        </Text>
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
                title="Close modal"
              >
              </Button>
            </View>
          </View>
        </Modal>
        <View>{this.showButton()}</View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#BDBDBD',
    padding: 10
  },
  taskNameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  startButton: {
    color: "#841584"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  }
})