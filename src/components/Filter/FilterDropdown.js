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
          </FilterDropdownItemContainer>
      )
      }
    </FilterDropdownWrapper>
  )
}

export default FilterDropdown;