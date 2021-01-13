import React, {useState, useEffect} from 'react';
import {MaterialPagination} from '../Pagination';
import {TableFooterWrapper} from './style';

const DataTableFooter = (props) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(props.data.count / props.page.per))
  }, [])

  return (
    <TableFooterWrapper>
      <div>
        mostrando del
        <b> {props.page.range.min+1}</b> al <b>{props.page.range.max}</b> -
        de <b>{props.data.count || 0}</b> resultados
      </div>
      <MaterialPagination
        pages={totalPages}
        current={props.page.current} 
        disabled={props.disabled}
        onChange={props.onChange}/>
    </TableFooterWrapper>
  )
}

export default DataTableFooter;