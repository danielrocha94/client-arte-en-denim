import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const MaterialPagination = (props) => {
  return (
    <Pagination
      page={props.current}
      onChange={props.onChange}
      count={props.pages}
      siblingCount={2}
      color="primary"/>
  )
}

export default MaterialPagination;