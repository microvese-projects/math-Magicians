import React from 'react';
import renderer from 'react-test-renderer';
import Btn from '../components/btn';

test('Should render button correctly', () => {
  const tree = renderer
    .create(
      <Btn
        value="AC"
        styled="btn"
        id="all-clear"
        onclick
      >
        Facebook
      </Btn>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
