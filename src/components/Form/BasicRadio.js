import React from 'react';
import {FormGroup, DefaultInput} from './style.js'
import {BasicInputLabel} from './';

const BasicRadio = (props) => {
  return (
    <FormGroup style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
      { props.data.map(data => {
          return (
            <span>
              <BasicInputLabel
                for={data.id}
                style={{textAlign: "center"}}
              >
                {data.title}
              </BasicInputLabel>
              <DefaultInput
                style={{width: '60px'}}
                id={data.id}
                onChange={()=>props.onChange(data)}
                name={props.groupName}
                type="radio"
                checked={data.checked}
              />
            </span>
          )
        })
      }
    </FormGroup>
  )
}

export default BasicRadio;