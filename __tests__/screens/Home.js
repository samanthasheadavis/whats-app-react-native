import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import routes from '../../src/config/routes';
import Home from '../../src/screens/Home';
import ChatScreen from '../../src/screens/ChatScreen';

it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  );
  expect(tree).toMatchSnapshot();
});

it('has proper navigation options', () => {
  expect(Home.navigationOptions).toMatchSnapshot();
})

it('navigate on press', () => {
  const navigate = jest.fn();
  const homeScreen = shallow(
    <Home navigation={{ navigate }}/>
  )
  homeScreen.find('Button').simulate('press');
  expect(navigate).toBeCalledWith("chat", {"name": "Samantha"});
})
