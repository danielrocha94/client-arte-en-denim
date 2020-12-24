import React from 'react';
import {ChatWriteContainer,ChatWriteInput } from './style';

const ChatWrite = (props) => {
  return (
    <ChatWriteContainer>
      <ChatWriteInput placeholder={props.children} onChange={props.onChange} onKeyDown={props.onKeyDown} value={props.value}/>
    </ChatWriteContainer>
  );
}

export default ChatWrite;