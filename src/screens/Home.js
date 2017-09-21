import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
  title: "Home Screen"
}
  render(){
    return (
      <View style={styles.container }>
        <Button title='Navigate to Chat Screen' onPress={() => this.props.navigation.navigate('chat',{ name: 'Samantha'})}/>
      </View>
    )
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
