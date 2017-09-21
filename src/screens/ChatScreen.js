import React, { Component } from 'react';
import { getMockData } from '../services/api';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.name}`
  })

  state = {
    messages: []
  }

  componentDidMount(){
    getMockData().then((messages) => {
      this.setState({
        messages
      })
    });
  }

  render(){
    return (
      <FlatList
        data={this.state.messages}
        renderItem={({ item }) =>
          <View>
            <Text>{item.message}</Text>
          </View>
        }
        keyExtractor={(item, index) => (`message-${index}`)}
      />
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
