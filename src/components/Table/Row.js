import React from 'react';
import {Tr} from './style';

const Row = (props) => {
  return (
    <Tr odd={props.odd && !!(props.odd % 2)} header={props.header}>
      {props.children}
    </Tr>
  )
}

export default Row;