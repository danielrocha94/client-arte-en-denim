import React from 'react';
import {BasicCheckboxInput, FormGroup, CheckboxWrapper} from './style';
import BasicInputLabel from './BasicInputLabel'


const BasicCheckbox = (props) => {
  return (
    <FormGroup>
      <CheckboxWrapper>
        <BasicCheckboxInput
          checked={props.checked}
          type="checkbox"
          disabled={props.disabled}
          onChange={()=>props.onChange(!props.checked)}
          id={props.id}
        />
        <BasicInputLabel
          required={props.required}
          for={props.id}
          hover={`cursor: pointer;`}
        >
          {props.children}
        </BasicInputLabel>
      </CheckboxWrapper>
    </FormGroup>
  )
}

export default BasicCheckbox;