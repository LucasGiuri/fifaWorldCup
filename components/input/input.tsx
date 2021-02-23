import React from 'react';

import { InputContainer } from './input.styles.js';

type Props = {
  value?: number,
  type: string,
  isDisabled?: boolean,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

function Input(props: Props) {
  const { onChange, value, type, isDisabled } = props;

  return (
    <InputContainer
      type='number'
      value={value}
      onChange={onChange}
      min='0'
      disabled={isDisabled}
      data-test={`input-${type}`}
    />
  );
}

export default Input;
