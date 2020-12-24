import React from 'react';
import {TitleWrapper, TitleIcon} from './style';

const Title = (props) => {
  return (
    <TitleWrapper>
      <TitleIcon icon={props.icon}/>
      {props.children}
    </TitleWrapper>
  )
}

export default Title;