import React from 'react';
import {FilterDropdownWrapper, FilterDropdownItemContainer} from './style';

const FilterDropdown = (props) => {
  return (
    <FilterDropdownWrapper>
      {
        props.filterList.map(filter => 
          <FilterDropdownItemContainer
            onClick={() => props.onCreate(filter)}
          >
            {filter.name}
            {props.searchValue && !!props.searchValue.length && ` que contenga "${props.searchValue}"`}
          </FilterDropdownItemContainer>
      )
      }
    </FilterDropdownWrapper>
  )
}

export default FilterDropdown;