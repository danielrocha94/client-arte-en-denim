import React from 'react';
import {TopInfoName,TopInfo,TopInfoState, TopInfoAvatar, TopInfoPlaceholder } from './style';
import UserAvatar from '../Chat/UserAvatar';
import Avatar from '../Chat/avatar2.png'

const ConversationTopInfo = (props) => {
  return (
    <TopInfoPlaceholder>
      <UserAvatar src={Avatar} status={props.userInfo.status}/>
      <TopInfo>
        <TopInfoName>
          {props.userInfo.name}
        </TopInfoName>
        <TopInfoState>
          {props.userInfo.status}
        </TopInfoState>
      </TopInfo>
    </TopInfoPlaceholder>
  );
}

export default ConversationTopInfo;