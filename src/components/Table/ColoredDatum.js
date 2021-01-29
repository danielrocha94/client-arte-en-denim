import React from 'react';
import {ColoredDatumWrapper, ColoredDatumIcon} from './style';
import {faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';

const ColoredDatum = (props) => {

  const getIconStatus = () => {
    if(props.icon) return props.icon;

  }

  return (
    <ColoredDatumWrapper variant={props.variant}>
      {props.children}
      <ColoredDatumIcon icon={getIconStatus()}/>
    </ColoredDatumWrapper>
  )
}

export default ColoredDatum;