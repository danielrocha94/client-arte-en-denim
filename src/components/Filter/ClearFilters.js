import { Clear } from '@material-ui/icons';
import React from 'react';
import {ClearFiltersWrapper} from './style';

const ClearFilters = (props) => {
  return (
    <ClearFiltersWrapper onClick={props.onClick}>
      Limpiar filtros
    </ClearFiltersWrapper>
  )
}

export default ClearFilters;