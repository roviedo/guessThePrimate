import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Questions from './Questions';
import * as questions from './questions.json'; // Get this from DB

export default class App extends React.Component {
  render() {
    const updatedQuestions = questions;
    delete updatedQuestions.default;
    return (
      <Questions questions={ updatedQuestions }/>
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
});
