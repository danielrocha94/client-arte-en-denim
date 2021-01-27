import React from 'react';
import {SelectedFilterWrapper, SelectedFilterCloseIcon, SelectedFilterCloseWrapper} from './style';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const SelectedFilter = (props) => {
  return (
    <SelectedFilterWrapper>
      {props.children}
      <SelectedFilterCloseWrapper onClick={props.onDelete}>
        <SelectedFilterCloseIcon icon={faTimesCircle}/>
      </SelectedFilterCloseWrapper>
    </SelectedFilterWrapper>
  )
}

export default SelectedFilter;