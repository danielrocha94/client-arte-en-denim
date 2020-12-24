import React from 'react';
import {PagWrapper, PaginationControl} from './style';
import PaginationButton from './PaginationButton';

const BasicPagination = (props) => {
  let {perPage, currentPage, totalResults} = props;
  let maxCurrentPage = currentPage * perPage;
  let maxPages = Math.ceil(totalResults / perPage);
  return (
    <PagWrapper>
      <i>Mostrando del {maxCurrentPage - perPage + 1} al {maxCurrentPage < totalResults ? maxCurrentPage : totalResults} de {totalResults} resultados.</i>
      <PaginationControl>
        <PaginationButton
          text="Anterior"
          disabled={currentPage === "1"}
          onClick={() => {props.handlePageChange(currentPage-1)}}
        />
        {
          [...Array(maxPages)].map((page, i) => {
            return (
            <PaginationButton
              onClick={()=>{props.handlePageChange(i+1)}}
              selected={currentPage === i+1}
              text={i+1}
            />)
          })
        }
        <PaginationButton
          disabled={currentPage === maxPages}
          text="Siguiente"
          onClick={() => {props.handlePageChange(currentPage+1)}}
        />
      </PaginationControl>
    </PagWrapper>
  )
}

export default BasicPagination