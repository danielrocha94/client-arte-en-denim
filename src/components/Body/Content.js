import React from 'react';
import LeftSidebar from '../../pages/shared/sidebar';
import {BodyContent} from './style';

const Content = (props) => {
  return (
    <BodyContent>
      {props.children}
    </BodyContent>
  )
}

export default Content;