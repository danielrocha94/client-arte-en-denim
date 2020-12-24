import React from 'react';
import {Tbody} from './style';

const DataTbody = (props) => {
  return (
    <Tbody>
      {props.children}
    </Tbody>
  )
}

export default DataTbody;