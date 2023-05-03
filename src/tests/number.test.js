import React from 'react';
import renderer from 'react-test-renderer';
import Number from '../components/number';

test('Should render calculator correctly', () => {
  const tree = renderer
    .create(<Number />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
