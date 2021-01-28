import React, {useState, useEffect} from 'react';
import {AppBar, Toolbar, Typography, TextField, Button, Select, MenuItem} from '@material-ui/core';

const RangeTextField = (props) => {
  const [range, setRange] = useState({min: "", max: ""});

  useEffect(() => {
    props.onChange({value: [range.min, range.max]})
  }, [range])

  const handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    setRange({...range, [id]: value});
  }

  return (
    <>
      <TextField
        label={"Minimo"}
        id={"min"}
        value={props.min}
        onChange={handleChange}/>
      <TextField
        label={"Máximo"}
        id={"max"}
        value={props.max}
        onChange={handleChange}/>
    </>
  )
}

export default RangeTextField;