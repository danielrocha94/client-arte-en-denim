import React from 'react';
import {ConversationContainer } from './style';

const ConversationContent = (props) => {
  return (
    <ConversationContainer>
      {props.children}
    </ConversationContainer>
  );
}

export default ConversationContent;