import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }

  }

  onPressLearnMore = (event) => {
    const index = this.state.index;
    if (index < (Object.keys(this.props.questions).length - 1)) {
      this.setState({
        index: index + 1
      });
    }
  }

  render() {
    const question = Object.keys(this.props.questions)[this.state.index];
    // const img = `./${question.img}.jpg`;
    return (
      <View style={{height: '100%'}}>
        <View style={{width: '100%', height: '50%', backgroundColor: 'powderblue'}}>
          <Image
            source={require('./monkey1.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{width: '100%', height: '50%', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue', justifyContent: 'center'}}>
          <View style={{backgroundColor: 'skyblue'}}>
            <Text>
              { question }
            </Text>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            { this.props.questions[[question]].choices.map((choice) => {
              return (
                <Button
                  onPress={this.onPressLearnMore}
                  title={choice}
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              )
            })}
          </View>
        </View>
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
});

