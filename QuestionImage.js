import React from 'react';
import { View, Image, Text } from 'react-native';

export default class QuestionImage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    _onLoad = () => {
        this.setState(() => ({ loaded: true }))
    }

    render () {
        return (
            <View style={{width: '100%', height: '60%', backgroundColor: 'powderblue'}}>
              <Image
                source={ this.props.imageSource }
                style={{width: '100%', height: '100%'}}
                onLoad={ this._onLoad }
              />
            </View>
        );
    }
}