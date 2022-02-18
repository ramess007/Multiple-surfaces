import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  asset
} from 'react-360';
import flatcomponent from './components/flatcomponent';

export default class WelcomeTo360 extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('landscape.jpg')}
        style={{
          width: 1000,
          height: 600,
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeTo360', () => WelcomeTo360);
AppRegistry.registerComponent('flatcomponent', () => flatcomponent);
