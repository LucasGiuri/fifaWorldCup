import React from 'react';

import logo from '../../commons/images/logo.png';
import { HeaderContainer, Img } from './header.styles';

function Header() {
  return (
    <HeaderContainer>
      <Img src={logo} alt='logo' />
    </HeaderContainer>
  );
}

export default Header;
