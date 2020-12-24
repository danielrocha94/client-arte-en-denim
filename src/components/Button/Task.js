import React, {useState} from 'react';
import {Icon} from '../Button';
import {TaskWrapper, TaskTitle, StatusBar} from './style';

const Task = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  return (
    <>
      <TaskWrapper onClick={() => setIsOpen(!isOpen)}>
        <Icon
          icon={isOpen ? props.openIcon : props.closedIcon}
        />
        <div>
          <TaskTitle>
            {props.title}
          </TaskTitle>
          <StatusBar status={props.status}>
            {props.statusMessage}
          </StatusBar>
          <div>
            {props.subtitle}
          </div>
        </div>
      </TaskWrapper>
      {isOpen && props.children}
    </>
  )
}

export default Task;