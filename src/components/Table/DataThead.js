import React from 'react';
import {Thead} from './style';

const DataThead = (props) => {
  return (
    <Thead>
      {props.children}
    </Thead>
  )
}

export default DataThead;