import React from 'react';
import {AddFilterWrapper} from './style';
import SelectedFilter from './SelectedFilter';
import AddFilterInput from './AddFilterInput';
import ClearFilters from './ClearFilters';

const AddFilter = (props) => {
  const getFilterName = (filter) => {
    if (typeof filter.value === "string") return `${filter.name}: "${filter.value}"`;
    if (typeof filter.value === "object") return `${filter.name}: entre "${filter.value[0]}" y "${filter.value[1]}"`;
  }

  return (
    <AddFilterWrapper>
      {props.activeFilters &&
       props.activeFilters.map((filter) => 
         <SelectedFilter onDelete={()=>props.onDelete(filter)}>{getFilterName(filter)}</SelectedFilter> )
      }
      <AddFilterInput
        filterList={props.filterList}
        activeFilters={props.activeFilters}
        onCreate={props.onCreate}/>
      <ClearFilters onClick={props.onClear}/>
    </AddFilterWrapper>
  )
}

export default AddFilter;