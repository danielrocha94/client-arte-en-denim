import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
const BootstrapPagination = (props) => {
  return (
    <div>
      <Pagination>
        <Pagination.First/>
        <Pagination.Prev/>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis/>       
        <Pagination.Item active>{2}</Pagination.Item>
      </Pagination>
    </div>
  )
}

export default BootstrapPagination;