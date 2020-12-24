import React from 'react';
import {TaskIcon} from './style';

const Task = (props) => {
  return (
    <TaskIcon icon={props.icon} style={props.style} status={props.status}/>
  )
}

export default Task;