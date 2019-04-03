import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as primates from './primates.json'; // Get this from DB
import QuestionImage from './QuestionImage';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      answers: [],
      score: null
    }
  }

  onPressLearnMore = (choice) => {
    const index = this.state.index;
    let { answers } = this.state;
    if (index < (Object.keys(this.props.questions).length - 1)) {
      answers.push(choice);
      this.setState({
        index: index + 1,
        answers
      });
    } else {
      let total = 0;
      for (let i=0; i<answers.length; i++) {
        if (Object.values(answers[i])[0] === primates[Object.keys(answers[i])[0]]) {
          total += 1;
        }
      }
      this.setState({
        score: Math.floor((total/answers.length) * 100)
      });
    }
  }

  getImage = (imageName) => {
    switch (imageName) {
      case 'primate1': return require('./primate1.jpg');
      case 'primate2': return require('./primate2.jpg');
      case 'primate3': return require('./primate3.jpg');
      case 'primate4': return require('./primate4.jpg');
      case 'primate5': return require('./primate5.jpg');
      case 'primate6': return require('./primate6.jpg');
      case 'primate7': return require('./primate7.jpg');
      case 'primate8': return require('./primate8.jpg');
      case 'primate9': return require('./primate9.jpg');
      case 'primate10': return require('./primate10.jpg');
    }
  }

  tryAgain = () => {
    this.setState({
      index: 0,
      answers: [],
      score: null
    });
  }

  render() {
    const question = Object.keys(this.props.questions)[this.state.index];
    return (
      <View style={{height: '100%'}}>
        <QuestionImage imageSource={this.getImage(this.props.questions[[question]].img)} />
        { !this.state.score ? 
            <View style={{width: '100%', height: '40%', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue'}}>
              <View style={{backgroundColor: 'skyblue', alignItems: 'center'}}>
                <Text  style={{fontSize: 20}}>
                  { question }
                </Text>
              </View>
              <View style={{display: 'flex', alignItems: 'center'}}>
                { this.props.questions[[question]].choices.map((choice, index) => {
                  return (
                    <TouchableOpacity style={styles.button} key={index} onPress={this.onPressLearnMore.bind(this, {[question]: choice})}>
                      <View>
                        <Text style={{fontSize: 15}}>{choice}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })}
              </View>
          </View> : 
          <View style={{width: '100%', height: '40%', backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 80, maxWidth: '100%'}}>
              { `${this.state.score}%`}
            </Text>
            <TouchableOpacity style={styles.button} onPress={this.tryAgain}>
              <View>
                <Text style={{fontSize: 15}}>Try Again</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#92c8ee',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  }
});

