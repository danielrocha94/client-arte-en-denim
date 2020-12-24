import React from 'react';
import {Table} from './style'

const DataTable = (props) => {
  return (
    <Table>
      {props.children}
    </Table>
  )
}

export default DataTable;