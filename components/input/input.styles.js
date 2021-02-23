import styled from 'styled-components';

import { colors } from '../../commons/colors';

export const InputContainer = styled.input`
  width: 35px;
  height: 35px;
  text-align: center;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  &:focus {
    outline: none;
}
  border: 1px solid ${colors.darkGray};
  box-shadow: none;
  border-radius: 50%;
`;
