import React from 'react';
import {ChatBoxContainer} from './style';
import UserAvatar from './UserAvatar';
import ChatInfo from './ChatInfo';

const ChatItem = (props) => {
  return (
    <ChatBoxContainer onClick={() => props.toggleConversationOpen(props.chatInfo)}>
      <UserAvatar src={props.chatInfo.avatarUrl} status={props.chatInfo.status}/>
      <ChatInfo info={props.chatInfo}/>
    </ChatBoxContainer>
  )
}

export default ChatItem;