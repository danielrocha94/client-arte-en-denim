import React, {useState, useEffect} from 'react';
import {PaginationWrapper, IconButton, PageNumber} from './style';
import _ from 'lodash';

const DefaultPagination = (props) => {
  let [totalPages, setTotalPages] = useState(1);
  let [showLength, setShowLength] = useState(9);
  let [showPages, setShowPages] = useState([0]);
  let [totalOffers, setTotalOffers] = useState(0);
  let [minShowingVal, setMinShowingVal] = useState(1); //minimum showing value

  useEffect(()=> {
    if(props.list.total_filtered_offers){
      let resTotalPages = Math.ceil(props.list.total_filtered_offers/props.page.per);
      if(!resTotalPages) resTotalPages = 1;
      setTotalPages(resTotalPages);
      setTotalOffers(props.list.total_filtered_offers);
    }
  }, [props.list])

  useEffect(() => {
    let currPage = props.page.current;
    let newMinShowingValue = (currPage - 4 >= 1) ? currPage - 4 : 1;
    let topShowingVal = newMinShowingValue + showLength;
    if ( totalPages <= topShowingVal &&  totalPages > 1 ) {
      setShowPages(_.range(minShowingVal, totalPages));
    } else {
      let lastPage = topShowingVal > totalPages ? totalPages : topShowingVal;
      setShowPages(_.range(newMinShowingValue, lastPage));
    }
  }, [props.page.current, totalPages, totalOffers]);

  return (
    <PaginationWrapper>
      {props.page.current !== 1 && 
        <IconButton 
          onClick={()=> props.changePage(1)}
        >{"<<"}</IconButton>}
      {props.page.current !== 1 && <IconButton onClick={props.clickPrevious}>{"Previous"}</IconButton>}
      {showPages.map(index => {
        return (
          <PageNumber
            active={props.page.current===(index)}
            onClick={()=> props.changePage(index)}
          >{index}</PageNumber>
        )
      })}
      {showPages.length >= 9 && showPages.indexOf(totalPages-2) == -1 && <PageNumber>...</PageNumber>}
      <PageNumber
        active={props.page.current==(totalPages)}
        onClick={()=> props.changePage(totalPages)}
      >{totalPages}</PageNumber>
      {props.page.current !== totalPages && <IconButton onClick={props.clickNext}>{"Next"}</IconButton>}
      {props.page.current !== totalPages && <IconButton onClick={()=> props.changePage(totalPages)}>{">>"}</IconButton>}
    </PaginationWrapper>
  )
}

export default DefaultPagination;