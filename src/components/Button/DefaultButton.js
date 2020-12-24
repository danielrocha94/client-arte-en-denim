import React from 'react';
import {ButtonWrapper} from './style';

const DefaultButton = (props) => {
  return (
    <ButtonWrapper 
      varaint={props.variant} 
      disabled={props.disabled} 
      style={props.style} 
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </ButtonWrapper>
  )
}

export default DefaultButton;