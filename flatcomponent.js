import React from 'react';
import {
  AppRegistry,
  View,
  Image,
  asset
} from 'react-360';

export default class flatcomponent extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('nature.jpg')}
          style={{
            width: 500,
            height: 720,
          }}
        />
    </View>
    );
  }
};
