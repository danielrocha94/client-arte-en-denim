import React from 'react';
import {profileDropdownMenuContainer} from './style';

const profileDropdownMenu = (props) => {
  return (
    <profileDropdownListContainer>
      {props.children}
    </profileDropdownListContainer>
  )
}

export default profileDropdownMenu;