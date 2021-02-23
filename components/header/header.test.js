import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Header from './header.tsx';

describe('Header', () => {
  jest.mock('Logo', () => '../../commons/images/logo.png');

  const arg = '../../commons/images/ARG.png';
  it('basic snapshot renders', () => {
    const b = renderer.create(<Header />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
