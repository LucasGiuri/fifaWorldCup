import styled from 'styled-components';
import { colors } from '../../commons/colors';

export const TeamResult = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  flex-direction: ${(p) => (p.position === 'left' ? 'row' : 'row-reverse' )};
  width: 100%;
  background-color: ${(p) => (p.winner ? colors.black : colors.white)};
  color: ${(p) => (p.winner ? colors.white : colors.black)};
  border-radius: 4px;
`;

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin: 16px 0;
`;

export const InputLabel = styled.div`
  padding: 0 12px;
`;

export const Vs = styled.div`
  display: flex;
  padding: 12px;
  color: lightgray;
  border-radius: 50%;
  margin-left: 12px;
  margin-right: 12px;
  border: 1px solid ${colors.white};
  background: ${colors.darkGray};
`;
