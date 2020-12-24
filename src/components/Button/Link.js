import React from 'react';
import {LinkAnchor} from './style';

const Link = (props) => {
  return (
    <LinkAnchor style={props.style} onClick={props.onClick} to={props.to}>{props.children}</LinkAnchor>
  )
}

export default Link;