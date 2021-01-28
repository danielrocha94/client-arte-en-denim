import React, {useState, useEffect} from 'react';
import {MaterialPagination} from '../Pagination';
import {TableFooterWrapper} from './style';

const DataTableFooter = (props) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(props.data.rows.length / props.page.per))
    setCurrentPage(props.page.current);
  }, [props.data.rows, props.page])

  return (
    <TableFooterWrapper>
      <div>
        mostrando del
        <b> {props.page.range.min+1}</b> al <b>{props.page.range.max}</b> -
        de <b>{props.data.rows.length || 0}</b> resultados
      </div>
      <MaterialPagination
        pages={totalPages}
        current={currentPage} 
        disabled={props.disabled}
        onChange={props.onChange}/>
    </TableFooterWrapper>
  )
}

export default DataTableFooter;