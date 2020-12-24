import React from 'react';
import {ChatInfoContainer, ChatAuthor, ChatText, ChatTime} from './style';

const ChatInfo = (props) => {
  return (
    <ChatInfoContainer>
      <ChatAuthor>{props.info.name}</ChatAuthor>
      <ChatText>{props.info.lastMessage}</ChatText>
      <ChatTime>{props.info.lastMessageDate}</ChatTime>
    </ChatInfoContainer>
  )
}

export default ChatInfo;