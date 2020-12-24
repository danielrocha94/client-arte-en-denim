import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function getSizeByType(size) {
  switch(size) {
    case 'medium':
      return {
        width: '300px',
        pointerArrowLeft: '39% !important'
      }
    default:
      return {
        width: '160px',
        pointerArrowLeft: '25% !important',
      }
  }
}

function notificationTypeProps(type) {
  switch(type) {
    case 'mention':
      return {
        backgroundColor: "#5893df",
        left: "25%",
      }
    case 'announcement':
      return {
        backgroundColor: "#2ec5d3",
        left: "25%",
      }
    case 'alert':
      return {
        backgroundColor: '#ec5e69',
        left: "35%",
      }
    case 'warning':
      return {
        backgroundColor: '#ffce3c',
        left: "22%",
      }
    case 'bug':
      return {
        backgroundColor: '#717D7E',
        left: "25%",
      }
    default:
      return {
        backgroundColor: 'green',
        left: "25%",
      }
  }
}



export const DropdownMenuContainer = Styled.div`
  position: absolute;
  background-color: white;
  min-width: 160px;
  width: ${props => getSizeByType(props.size).width };
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 7px 0 7px 0;
  top: 200%;
  right: 0%;
  float: left;
  box-shadow: 0 5px 5px -5px rgba(0,0,0,.1);
  display: block;
  border-radius: 2px;
  border: 2px solid #e5e5e5;

/* width */
::-webkit-scrollbar {
  width: 7px;
  border-radius: 3.5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(136,136,136,0.6);
  border-radius: 3.5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

`;

export const DropdownMenuItem = Styled.li`
  font-size: 13px;
  font-family: Gudea, sans-serif;
  text-transform:capitalize;
  margin: 0;
  padding: 8px 15px;
  color: #5f5f5f;
  display: block;
  text-align: left;
  color: rgb(95, 95, 95);
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const PointerArrow = Styled.div`
  display: block;
  position: relative;
  background-color: white;
  top: 20px;
  left: ${props => getSizeByType(props.size).pointerArrowLeft };
  width: 0;
  padding: 5px;
  z-index: 1;
  transform: rotate(45deg);
  box-shadow: 0 5px 5px -5px rgba(0,0,0,.1);
  margin: 0;
`;

export const Divider = Styled.div`
  background-color: #e5e5e5;
  margin: 9px 0;
  height: 1px;
`;

export const DropdownNotifItem = Styled.li`
  font-size: 13px;
  font-family: Gudea, sans-serif;
  text-transform:capitalize;
  margin: 0;
  padding: 8px 0 8px 15px;
  color: #5f5f5f;
  display: block;
  text-align: left;
  color: rgb(95, 95, 95);
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const NotificationIcon = Styled(FontAwesomeIcon)`
  color: white;
  top: 25%;
  left: ${ props => notificationTypeProps(props.type).left };
  position: absolute;
  font-family: Guidea, sans-serif;
`

export const NotificationIconContainer = Styled.div`
  background-color: ${ props => notificationTypeProps(props.type).backgroundColor };
  width: 30px;
  height: 30px;
  text-align: center;
  position: relative;
  border-radius: 15px;
  margin-top: 10px;
  display: inline-block;
  border: 2px solid #e5e5e5;
`;

export const DropdownNotifItemContent = Styled.div`
  width: 204px;
  padding: 4px 5px 4px 10px;
  display: inline-block;
  vertical-align: middle;
`;

export const DropdownNotifItemDate = Styled.div`
  color: #aaa;
  padding: 5px;
  font-size: 80%;
`;