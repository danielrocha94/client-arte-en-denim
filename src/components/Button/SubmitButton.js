import React from 'react';
import {SubmitBtn} from './style';

const Button = (props) => {
  return (
    <SubmitBtn onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </SubmitBtn>
  )
}

export default Button;