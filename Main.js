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

  getImage = (name) => {
    switch (name) {
      case 'monkey1': return require('./monkey1.jpg');
      case 'monkey2': return require('./monkey2.jpg');
      case 'monkey3': return require('./monkey3.jpg');
      case 'monkey4': return require('./monkey4.jpg');
      case 'monkey5': return require('./monkey5.jpg');
      case 'monkey6': return require('./monkey6.jpg');
      case 'monkey7': return require('./monkey7.jpg');
      case 'monkey8': return require('./monkey8.jpg');
      case 'monkey9': return require('./monkey9.jpg');
      case 'monkey10': return require('./monkey10.jpg');
    }
  }

  render() {
    const question = Object.keys(this.props.questions)[this.state.index];
    return (
      <View style={{height: '100%'}}>
        <View style={{width: '100%', height: '65%', backgroundColor: 'powderblue'}}>
          <Image
            source={this.getImage(this.props.questions[[question]].img)}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{width: '100%', height: '35%', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'skyblue'}}>
          <View style={{backgroundColor: 'skyblue', alignItems: 'center'}}>
            <Text  style={{fontSize: 20}}>
              { question }
            </Text>
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            { this.props.questions[[question]].choices.map((choice, index) => {
              return (
                <Button
                  key={index}
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

