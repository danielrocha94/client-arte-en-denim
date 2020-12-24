import React from 'react';
import {DropdownMenuContainer, PointerArrow} from './style';

const DropdownMenu = (props) => {
  return (
    <>
      <PointerArrow size={props.size}/>
      <DropdownMenuContainer size={props.size}>
      {props.children}
    </DropdownMenuContainer>
    </>
  )
}

export default DropdownMenu;