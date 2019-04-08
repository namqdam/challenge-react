import React from 'react';
import { HomeView } from 'components/home/home-view';
import renderer from 'react-test-renderer';

test('HomeView', () => {
  const component = renderer.create(<HomeView />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
