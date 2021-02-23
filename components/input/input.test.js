import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from './input.tsx';

describe('Input', () => {
  const onChange = jest.fn();

  it('basic snapshot renders', () => {
    const b = renderer.create(<Input type='penalties' onChange={onChange} />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders with input', () => {
    const b = renderer.create(<Input type='penalties' value='fakeValue' onChange={onChange} />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders with isDisabled', () => {
    const b = renderer.create(<Input type='penalties' isDisabled onChange={onChange} />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot renders with isDisabled and value', () => {
    const b = renderer.create(<Input type='penalties' value='fakeValue' isDisabled onChange={onChange} />);
    const tree = b.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
