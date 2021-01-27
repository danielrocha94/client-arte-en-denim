import React from 'react';
import {AddFilterWrapper} from './style';
import SelectedFilter from './SelectedFilter';
import AddFilterInput from './AddFilterInput';
import ClearFilters from './ClearFilters';

const AddFilter = (props) => {
  return (
    <AddFilterWrapper>
      {props.activeFilters &&
       props.activeFilters.map((filter) => 
         <SelectedFilter onDelete={()=>props.onDelete(filter)}>{filter.name}: "{filter.value}"</SelectedFilter> )
      }
      <AddFilterInput
        filterList={props.filterList}
        onCreate={props.onCreate}/>
      <ClearFilters onClick={props.onClear}/>
    </AddFilterWrapper>
  )
}

export default AddFilter;