import React from 'react';
import {faTimes, faAngleRight} from '@fortawesome/free-solid-svg-icons';

import {
  RightSidebarTop,
  RightSidebarTabs,
  RightSidebarClose,
  IconClose,
} from './style'

const Header = (props) => {
  return (
    <RightSidebarTop>
      <RightSidebarTabs>
        {props.children}
      </RightSidebarTabs>
      
      <RightSidebarClose onClick={props.onClick}>
        {
          props.closeButton === "back" ? (
            <IconClose icon={faAngleRight}/>
          ) : (
            <IconClose icon={faTimes}/>
          )
        }
      </RightSidebarClose>
    </RightSidebarTop>
  )
}

export default Header;