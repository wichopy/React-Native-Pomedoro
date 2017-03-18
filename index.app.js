import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image, TextInput, Animated, Dimensions } from 'react-native';
import { Constants, Components } from 'expo';

const PAGE_WIDTH = Dimensions.get('window').width;

export default class App extends Component {
  state = {
    inputValue: "You can change me!",
    scroll: new Animated.Value(0),
    timer: 30
  };

  _handleButtonPress = () => {
    var timer = this.state.timer
    console.log(this.state.timer);
    timer -= 1;
    this.setState({timer});
  };

  _handleTextChange = inputValue => {
    console.log(inputValue);
    this.setState({ inputValue });
    this.setState({timer: inputValue});
  };

  render() {
    const position = Animated.divide(this.state.scroll, PAGE_WIDTH);
    
    console.log(PAGE_WIDTH)
    return (
      
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change initial time here:
        </Text>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
        />
      
        <Text style={styles.title}>
          Pomedoro Tracker
        </Text>
        <Text style={styles.paragraph}>
          Let me help you keep track of your productivity.
        </Text>
        <Text>
          {this.state.timer}
        </Text>
        <Button
          title="Start Timer"
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    fontSize: 36
  },
  clock: {
    fontSize: 24
  }
});
