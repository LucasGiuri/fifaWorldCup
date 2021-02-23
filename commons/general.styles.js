import styled from 'styled-components';
import backgroundImage from './images/bg.jpg';

export const Body = styled.body`
  background: url(${backgroundImage}) no-repeat center center fixed; 
  background-size: cover;
  margin: 0px;
`;

export const PageContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    width: 80%;
  }
`;
