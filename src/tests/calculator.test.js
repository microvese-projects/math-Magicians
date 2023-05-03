import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

test('Should render calculator correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
