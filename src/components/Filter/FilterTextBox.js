import React, {useState, useEffect} from 'react';
import {FilterTextBoxWrapper, CloseIcon, TextInputContainer, ApplyButtonContainer } from './style';
import {AppBar, Toolbar, Typography, TextField, Button} from '@material-ui/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const FilterTextBox = (props) => {

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if(props.filter && props.filter.value) {
      setIsDisabled(!props.filter.value.length);
    } else { 
      setIsDisabled(true);
    }
  }, [props.filter])

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
          <TextField
            label="Coincida con" 
            value={props.filter.value}
            onChange={props.onChange}/>
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