import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Image from './image.tsx';

describe('Image', () => {
  const arg = '../../commons/images/ARG.png';
  it('basic snapshot renders', () => {
    const b = renderer.create(<Image src={arg} />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
