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
    if(selectedFilter) {
      setShowFilterTextBox(true);
    } else {
      setShowFilterTextBox(false);
    }
  }, [selectedFilter])

  const toggleFocus = () => {
    if (!value.length) {
      setTimeout(() => {
        setInputFocused(!inputFocused);
      }, 150)
    }
  }

  const handleValueChange = (e) => {
    let val = e.target.value;
    setValue(val);
  }

  const handleDropdownSelect = (filter) => {
    let newFilter = {name: filter.name, value: ""};
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

  const handleFilterTextboxChange = (e) => {
    let val = e.target.value
    let newFilter = {...selectedFilter, value: val};
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
            searchValue={value}
            onCreate={handleDropdownSelect} />
        }
      </>}
      {showFilterTextBox && 
        <FilterTextBox
          onClose={() => {setSelectedFilter(false)}}
          onChange={(e) => handleFilterTextboxChange(e)}
          onClick={handleCreateFilter}
          filter={selectedFilter}
        />
      }
    </AddFilterInputWrapper>
  )
}

export default AddFilterInput;