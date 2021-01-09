import React from 'react';
import {ColoredDatumWrapper, ColoredDatumIcon} from './style';

const ColoredDatum = (props) => {
  return (
    <ColoredDatumWrapper variant={props.variant}>
      {props.children}
      <ColoredDatumIcon icon={props.icon}/>
    </ColoredDatumWrapper>
  )
}

export default ColoredDatum;