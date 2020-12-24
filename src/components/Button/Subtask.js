import React from 'react';
import {SubtaskWrapper, TaskTitle, TaskTextContainer, PointerArrow, TaskConnector} from './style';
import {Icon} from '../Button';

const Subtask = (props) => {
  return (
    <SubtaskWrapper onClick={() => props.onClick(props.id)}>
      <TaskConnector/>
      <Icon
        icon={props.icon}
        status={props.status}
        style={{
          fontSize: '35px',
        }}
      />
      <TaskTextContainer>
        <TaskTitle>
          {props.title}
        </TaskTitle>
        <PointerArrow/>
        {props.children}
      </TaskTextContainer>
    </SubtaskWrapper>
  )
}

export default Subtask;