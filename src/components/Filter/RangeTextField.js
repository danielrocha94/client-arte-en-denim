import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core';

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
      {props.type === "date" ?
        <>
          <TextField
            id="min"
            label="Fecha Inicial"
            type="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
          }}/>
          <TextField
            id="max"
            label="Fecha Final"
            type="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
          }}/>
        </> :
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
      }
    </>
  )
}

export default RangeTextField;