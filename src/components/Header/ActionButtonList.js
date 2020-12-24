import React from 'react';
import {ActionBtnList} from './style';

const ActionButtonList = (props) => {
  return (
    <ActionBtnList> 
      {props.children}
    </ActionBtnList>
  );
};

export default ActionButtonList;