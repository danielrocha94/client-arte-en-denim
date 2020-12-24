import React from 'react';
import {MessagesContainer } from './style';

const MessagesContent = (props) => {
  return (
    <MessagesContainer>
      {props.children}
    </MessagesContainer>
  );
}

export default MessagesContent;