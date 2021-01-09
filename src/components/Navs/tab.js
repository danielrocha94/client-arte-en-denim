import React from 'react';
import {TabContainer, TabText} from './style';

const Tab = (props) => {
  return (
    <TabContainer
      active={props.active === props.id}
      onClick={props.onClick && (() => props.onClick(props.id))}
    >
      <TabText>
        {props.children}
      </TabText>
    </TabContainer>
  )
}

export default Tab;