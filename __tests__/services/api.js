import 'react-native';
import React from 'react';
import { getMockData } from '../../src/services/api';

it('resolves to mock data',async () => {
  const messages = await getMockData();
  expect(messages).toMatchSnapshot();
});
