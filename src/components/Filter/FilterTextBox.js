import React, {useState, useEffect} from 'react';
import {FilterTextBoxWrapper, CloseIcon, TextInputContainer, ApplyButtonContainer } from './style';
import {AppBar, Toolbar, Typography, TextField, Button, Select, MenuItem} from '@material-ui/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {filterOptions} from '../../utils/actions/filters';
import RangeTextField from './RangeTextField';

const FilterTextBox = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [filteringOption, setFilteringOption] = useState({})

  useEffect(() => {
    if(props.filter) {
      if(!Object.entries(filteringOption).length) {
        let option = filterOptions[props.filter.data];
        setFilteringOption(option);
      }
      
      if (!props.filter.data) setFilteringOption({});

      if(props.filter.value) {
        setIsDisabled(!props.filter.value.length);
      } else {
        setIsDisabled(true);
      }
    }
  }, [props.filter])

  const handleSelectChange = (e) => {
    let type = e.target.value;
    let obj = filterOptions[props.filter.data][type];
    let filter = {type, type_name: obj.name, value: ""}
    props.onChange(filter);
  }

  const handleInputChange = (e) => {
    let value = e.target.value;
    props.onChange({value});
  }

  const inputDisplayer = () => {
    if (props.filter.data === "date") {
      if (props.filter.type === "in_the_last") {
        return (
          <TextField
            label={"Número de dias"}
            value={props.filter.value}
            onChange={handleInputChange}/>
        )
      }
      if (props.filter.type === "between") {
        return (
          <>
          <TextField
            id="start_date"
            label="Fecha Inicial"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}/>
            <TextField
            id="end_date"
            label="Fecha Final"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}/>
          </>
        )  
      }
      return (
        <TextField
          id="date"
          label="Fecha"
          type="date"
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )
    }
    if (props.filter.type === "between") {
      return (
        <RangeTextField 
          min={props.filter.value[0]}
          max={props.filter.value[1]}
          onChange={props.onChange}
        />
      )
    } else {
      return (
        <TextField
        label={"Escribe un valor"}
        value={props.filter.value}
        onChange={handleInputChange}/>
      )
    }
  }

  return (
    <FilterTextBoxWrapper>
      <AppBar position="static">
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h7">
            {props.filter && props.filter.name}
          </Typography>
          <CloseIcon icon={faTimes} onClick={props.onClose}/>
        </Toolbar>
        <TextInputContainer>
          <Select
            onChange={handleSelectChange}
            value={props.filter.type}
          > 
            {Object.entries(filteringOption).map(([key, obj]) => {
              return <MenuItem value={key} name={key}>{obj.name}</MenuItem>
            })}
          </Select>
          {inputDisplayer()}
        </TextInputContainer>
        <ApplyButtonContainer>
          <Button
          disabled={isDisabled}
          color="primary"
          onClick={props.onClick}
          style={{
            fontWeight: "bold",
            minWidth: "88px",
            }}
          >Aplicar</Button>
        </ApplyButtonContainer>
      </AppBar>
    </FilterTextBoxWrapper>
  )
}

export default FilterTextBox;