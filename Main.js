import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as primates from './primates.json'; // Get this from DB
import QuestionImage from './QuestionImage';

export default class Main extends React.Component {
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

  // getImage = (name) => {
  //   switch (name) {
  //     case 'monkey1': return require('./monkey1.jpg');
  //     case 'monkey2': return require('./monkey2.jpg');
  //     case 'monkey3': return require('./monkey3.jpg');
  //     case 'monkey4': return require('./monkey4.jpg');
  //     case 'monkey5': return require('./monkey5.jpg');
  //     case 'monkey6': return require('./monkey6.jpg');
  //     case 'monkey7': return require('./monkey7.jpg');
  //     case 'monkey8': return require('./monkey8.jpg');
  //     case 'monkey9': return require('./monkey9.jpg');
  //     case 'monkey10': return require('./monkey10.jpg');
  //   }
  // }

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
        <QuestionImage imageName={this.props.questions[[question]].img} />
        { !this.state.score ? 
            <View style={{width: '100%', height: '35%', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue'}}>
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
          <View style={{width: '100%', height: '35%', backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 80, maxWidth: '50%'}}>
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
    borderRadius: 5
  }
});

