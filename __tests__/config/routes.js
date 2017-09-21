import 'react-native';
import React from 'react';
import routes from '../../src/config/routes';
import Home from '../../src/screens/Home';
import ChatScreen from '../../src/screens/ChatScreen';

it('has all needed routes', () => {
  it('has all needed routes', () => {
    expect(routes).toMatchSnapshot();
  });
});

it('has home screen', () => {
  expect(routes.home.screen).toBe(Home);
})
it('has chat screen', () => {
  expect(routes.chat.screen).toBe(ChatScreen);
})
