import React, {useState, useEffect} from 'react';
import {
  AddFilterInputWrapper,
  AddFilterInputContainer,
  AddFilterInputField,
  AddFilterInputIconContainer,
  AddFilterInputIcon} from './style';
import FilterDropdown from './FilterDropdown';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FilterTextBox from './FilterTextBox';

const AddFilterInput = (props) => {
  const [inputFocused, setInputFocused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [showFilterTextBox, setShowFilterTextBox] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
      setShowFilterTextBox(selectedFilter);
  }, [selectedFilter])

  const toggleFocus = () => {
    if (!value.length) {
      setTimeout(() => {
        setInputFocused(!inputFocused);
      }, 400) //FIX THIS PATCH
    }
  }

  const handleValueChange = (e) => {
    let val = e.target.value;
    setValue(val);
  }

  const handleDropdownSelect = (filter) => {
    let newFilter = {...filter, value: ""};
    if(value.length) {
      newFilter.value = value;
      setValue("");
      props.onCreate(newFilter);
      setSelectedFilter(false);
      setInputFocused(false);
    } else {
      setSelectedFilter(newFilter);
    }
  }

  const handleFilterChange = (e) => {
    let newFilter = {...selectedFilter, ...e};
    setSelectedFilter(newFilter);
  }

  const handleCreateFilter = () => {
    props.onCreate(selectedFilter);
    setSelectedFilter(false);
  }

  return (
    <AddFilterInputWrapper>
      {!showFilterTextBox && <>
        {inputFocused ? 
          <AddFilterInputField
            autoFocus
            type="text" 
            value={value} 
            onBlur={toggleFocus}
            onChange={handleValueChange}/> :
          <AddFilterInputContainer onClick={toggleFocus}>
            <AddFilterInputIconContainer>
              <AddFilterInputIcon icon={faPlus}/>
            </AddFilterInputIconContainer>
            Agregar un Filtro
          </AddFilterInputContainer>
        }
        {inputFocused && 
          <FilterDropdown 
            filterList={props.filterList}
            activeFilters={props.activeFilters}
            searchValue={value}
            onCreate={handleDropdownSelect} />
        }
      </>}
      {showFilterTextBox && 
        <FilterTextBox
          onClose={() => {setSelectedFilter(false)}}
          onChange={handleFilterChange}
          onClick={handleCreateFilter}
          filter={selectedFilter}
        />
      }
    </AddFilterInputWrapper>
  )
}

export default AddFilterInput;