import Styled, {css} from 'styled-components';

export const TopInfo = Styled.div`
  float: left;
  width: 100px;
  padding: 10px 20px 9px 2px;
  &:hover {
    cursor: pointer;
  }
`;

export const TopInfoName = Styled.div`
  color: rgba(225,  235, 245, 0.9);
  font-size: 14px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`;

export const TopInfoState = Styled.div`
  color: rgba(225,  235, 245, 0.7);
  font-size: 12px;
  opacity: 0.6;
`;

export const ChatWriteInput = Styled.input`
  background: 0 0;
  border: 0;
  border-top: 1px solid #1e2633;
  height: 50px;
  border-radius: 0;
  padding: 0 20px;
  color: rgba(225, 235, 245, 0.9);
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

export const ChatWriteContainer = Styled.div`

`;

export const ConversationContainer = Styled.div`
  width: auto;
  overflow: hidden;
  height: calc(100% - 56px)!important;  
  color: rgba(225, 235, 245, 0.9);
`;

export const MessagesContainer = Styled.div`
  height: calc(100% - 55px)!important;
  padding-bottom: 20px;
  overflow: scroll; 
  overflow-x: hidden; 
  width: auto;
  ::-webkit-scrollbar {
  width: 5px;
}
`;

export const TopInfoAvatar = Styled.img`
  float: left;
  width: 40px;
  border-radius: 100%;
  margin: 10px 10px 10px 18px;
`;

export const TopInfoPlaceholder = Styled.div`
  /* border-bottom: 1px solid #1e2633; */
  height: 100%;
`;


export const MessageContainer = Styled.div`
  color: rgba(225, 235, 245, 0.7);
`;

export const MessageDate = Styled.div`
  width: 100%;
  opacity: 0.3;
  font-size: 12px;
  text-align: center;
  padding: 10px 0px;
`;

export const ChatBubbleContainer = Styled.div`
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
`;
export const ChatBubbleImgContainer = Styled.div`
  float: left;
`;
export const ChatBubbleImg = Styled.img`
  margin-left: 18px;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  vertical-align: middle;
  border-width: 0px;
`;

export const ChatBubbleTextContainer = Styled.div`
  float: ${props => props.type === "received" ? "left" : "right"};
  max-width: 60%;
  display: block;
`;

const chatTextMe = css`
  margin-left: 10px;
  margin-right: 28px;
  float: right;
  background: rgb(88, 147, 223);
`;

export const ChatBubbleText = Styled.div`
  margin: 10px;
  margin-top: 0px;
  background: rgb(35, 47, 65);
  min-height: 28px;
  position: relative;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.8;
  float: left;
  clear: both;
  overflow-wrap: break-word;
  max-width: 100%;
  padding: 7px 12px;
  
  ${props => props.type === "sent" && chatTextMe}
`;

export const ChatBubbleMePointer = Styled.div`
  position: absolute;
  top: 0px;
  right: -9px;
  border-width: 10px 10px 0px 0px;
  border-color: rgb(88, 147, 223) transparent transparent;
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  box-sizing: border-box;
`;


export const ChatBubbleThemPointer = Styled.div`
  position: absolute;
  top: 0px;
  left: -9px;
  border-width: 0 10px 10px 0px;
  border-color: transparent rgb(35, 47, 65) transparent transparent;
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  box-sizing: border-box;
`;