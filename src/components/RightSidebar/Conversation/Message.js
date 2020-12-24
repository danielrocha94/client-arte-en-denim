import React from 'react';
import Avatar from '../Chat/avatar2.png';

import {
  MessageContainer,
  MessageDate,
  ChatBubbleContainer,
  ChatBubbleImgContainer,
  ChatBubbleImg,
  ChatBubbleTextContainer,
  ChatBubbleText,
  ChatBubbleMePointer,
  ChatBubbleThemPointer
} from './style';

const Message = (props) => {
  return (
    <MessageContainer>
      <MessageDate>
        02/06/2020 5:58pm
      </MessageDate>
      <ChatBubbleContainer>
        {props.type === "received" &&
          <ChatBubbleImgContainer>
            <ChatBubbleImg src={Avatar}/>
          </ChatBubbleImgContainer>
        }
        <ChatBubbleTextContainer type={props.type}>
          <ChatBubbleText type={props.type}>
            {props.type === "received" &&
              <ChatBubbleThemPointer/>
            }
            {props.children}
            {props.type === "sent" &&
              <ChatBubbleMePointer/>
            }
          </ChatBubbleText>
        </ChatBubbleTextContainer>
      </ChatBubbleContainer>
    </MessageContainer>
  )
}

export default Message;