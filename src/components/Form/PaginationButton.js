import React from 'react';
import {PagButton} from './style';

const PaginationButton = (props) => {
  return (
    <PagButton disabled={props.disabled} selected={props.selected} onClick={!props.disabled && props.onClick}>
      {props.text}
    </PagButton>
  )
}

export default PaginationButton