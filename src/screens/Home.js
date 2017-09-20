import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
  title: "Home Screen"
}
  render(){
    return (
      <View style={styles.container }>
        <Button />
      </View>
    )
  }
}
