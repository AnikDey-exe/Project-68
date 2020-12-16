import React from 'react';
import { Text, View } from 'react-native';

export default class FB extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:20,color: 'red'}}>Facebook</Text>
        </View>
      );
    }
  }