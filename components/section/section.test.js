import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Section from './section.tsx';

describe('Image', () => {
  it('basic snapshot renders', () => {
    const b = renderer.create(<Section title='faketitle'>fake children</Section>);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
