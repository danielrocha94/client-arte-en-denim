import React from 'react';
import { MenuContainer, MenuWrapper } from "./style";

const Menu = (props) => {
  return (
    <MenuContainer>
      <MenuWrapper>
        {props.children}
      </MenuWrapper>
    </MenuContainer>
  )
}

export default Menu;