import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Should render home page correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
