import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {

  renderList() {
    const names = [
      'Eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai'
    ];

    const textElements = names.map( (name, index) => {
      return <Text key={index}>{name}</Text>
    })

    return textElements;

  }

  render() {
    return (
      <View>
        <Header title='Contacts'/>
        { this.renderList() }
      </View>
    );
  }
}
