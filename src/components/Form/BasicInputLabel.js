import React, {useState} from 'react';
import {BasicTooltip} from '../Form';
import { InputLabel } from './style.js'

const BasicInputLabel = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);
  return (
    <>
      <InputLabel
        for={props.for}
        onMouseEnter={toggleToolTip}
        onMouseLeave={toggleToolTip}
        errorField={props.errorField}
        hover={props.hover}
        style={props.style}
      >
        {props.children}
        {props.required &&
          <BasicTooltip
            placement="right"
            show={tooltipOpen}
          >
            {props.tooltip}
          </BasicTooltip>
        }
      </InputLabel>
    </>
  )
}

export default BasicInputLabel;