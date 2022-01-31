/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View } from 'react-native';

export class SeparadorLista extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: 5,
          marginRight: 5,
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  }
}
