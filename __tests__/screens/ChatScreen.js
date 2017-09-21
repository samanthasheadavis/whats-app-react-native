import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import routes from '../../src/config/routes';
import Home from '../../src/screens/Home';
import ChatScreen from '../../src/screens/ChatScreen';
import { getMockDataSpy } from '../../__mocks__/services/api';

jest.mock('../../__mocks__/services/api')

it('renders correctly', () => {
  const tree = renderer.create(
    <ChatScreen />
  );
  expect(tree).toMatchSnapshot();
});

it('has proper navigation options', () => {
  expect(ChatScreen.navigationOptions).toMatchSnapshot();
})

// it('navigate on press', () => {
//   const goBack = jest.fn();
//   const chatScreen = shallow(<ChatScreen navigation={{ navigate }} /> )
//   chatScreen.find('Button').simulate('press');
//   expect(goBack).toBeCalledWith("home");
// })

it('ChatScreen has proper navigation options', () => {
    expect(
        ChatScreen.navigationOptions({
            navigation: {
                state: {
                    params: {
                        name: 'Samantha'
                    }
                }
            }
        }
    )).toMatchSnapshot();
})

it('fetches data when component is rendered', () => {
    const chatScreen = renderer.create(<ChatScreen />);
    expect(getMockDataSpy).toBeCalled();
}) 
