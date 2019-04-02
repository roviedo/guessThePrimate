import React from 'react';
import { View, Image } from 'react-native';

export default class QuestionImage extends React.Component {
    getImage = (imageName) => {
        switch (imageName) {
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

    render () {
        return (
            <View style={{width: '100%', height: '65%', backgroundColor: 'powderblue'}}>
              <Image
                source={this.getImage(this.props.imageName)}
                style={{width: '100%', height: '100%'}}
              />
            </View>
        );
    }
}