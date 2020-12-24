import Styled from 'styled-components';

export const ChatBoxContainer = Styled.a`
  overflow: hidden;
  position: relative;
  display: block;
  border-bottom: 1px solid #1e2633;
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    background: #1c2636;
  }
`;

export const ActiveUser = Styled.span`
  content: ' ';
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2EC5D3;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

function statusColorChooser(status) {
  switch(status) {
    case 'Away': 
      return '#F8C33F';
    case 'Busy':
      return '#ED212C'
    case 'Available':
      return '#2EC5D3';
    case 'Disconnected':
      return '#7E807C';
    default:
      return '#2EC5D3';
  }
}

export const UserStatus = Styled.span`
content: ' ';
display: block;
width: 9px;
height: 9px;
border-radius: 50%;
background: ${props => {return statusColorChooser(props.status)}};
position: absolute;
bottom: 10px;
right: 10px;
`;

export const UserAvatarContainer = Styled.div`
  position: relative;
  overflow: hidden;
  float: left;
  display: inline-block;
`;

export const UserAvatarImg = Styled.img`
  float: left;
  width: 40px;
  border-radius: 100%;
  margin: 10px 10px 10px 18px;
`;

export const ChatInfoContainer = Styled.div`
  float: left;
  overflow: hidden;
  padding: 13px 0;
  font-size: 13px;
  width: 100px;
`;

export const ChatAuthor = Styled.span`
  color: rgba(225,235,245,.9);
  font-weight: 500;
  display: block;
  line-height: 15px;
  padding: 0;
  margin-bottom: 4px;
`;

export const ChatText = Styled.span`
  color: rgba(225,235,245,.4);
  display: block;
`;

export const ChatTime = Styled.span`
  display: block;
  color: rgba(225, 235, 245, 0.7);
  opacity: 0.3;
  font-size: 11px;
  line-height: 15px;
  padding: 0;
  margin: -7.5px 0 0;
  position: absolute;
  right: 20px;
  top: 50%;
`;

export const LoadMoreContainer = Styled.div`
  display: block;
  text-align: center;
  width: 100%;
  margin: 15px auto;
  font-size: 14px;
  color: rgba(225,235,245,.2);
  &:hover {
    cursor: pointer;
    color: rgba(225,235,245,.6);
  }
`;