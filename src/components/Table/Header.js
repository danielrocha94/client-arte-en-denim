import React from 'react';
import {Th, SortIcon} from './style';
import { faSort, faSortDown, faSortUp, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';

const Header =  (props) => {
  const sortDirection = (sortBy) => {
    let fa = {
      sort: faSort,
      sortDown: props.alpha ? faSortAlphaDown : faSortDown,
      sortUp: props.alpha ? faSortAlphaUp : faSortUp,
    }
    return (sortBy.name !== props.name && fa.sort) || (sortBy.order == "desc" ? fa.sortDown : fa.sortUp);
  }
  
  return (
    <Th onClick={()=> {!!props.name && !!props.onClick && props.onClick(props.name)}}>
      <div style={{display: 'flex'}}>
        {'sortBy' in props && <SortIcon icon={sortDirection(props.sortBy)}/>}
        {props.children}
      </div>
    </Th>
  )
}

export default Header;