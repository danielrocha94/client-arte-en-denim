import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const MaterialPagination = (props) => {
  return (
    <Pagination
      defaultPage={props.current}
      onChange={props.onChange}
      count={props.pages} 
      color="primary"/>
  )
}

export default MaterialPagination;