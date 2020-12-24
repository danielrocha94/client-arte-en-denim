import Styled, {css} from 'styled-components';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

export const DropdownBtn = Styled.button`
  padding: 0 15px;
  height: 24px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: rgb(215,224,235);
  &:hover {
    color: white;
  }

  &:focus {  
    outline:none;
  }
`
export const DropdownBtnIcon = Styled(FontAwesomeIcon)`
  color: rgba(225,235,245,.95)!important;
`;

export const SubmitBtn = Styled.button`
  cursor: pointer;
  color: ${props => props.disabled ? props.theme.text.color.disabled : "#fff"};
  font-size: 16px;
  border-radius: 2px;
  border: none;
  height: 50px;
  line-height: 48px;
  text-align: center;
  width: 100%;
  border-color: #004b75;
  border-bottom-color: ${props => props.disabled ? props.theme.bg.disabled : "#00456a"};
  background-color: linear-gradient(#007dc1, #0073b2);
  background: -webkit-linear-gradient(#007dc1,#0073b2);
  box-shadow: 0 1px 0 rgba(0,0,0,.15), inset 0 1px 0 0 hsla(0,0%,100%,.1);
  margin-bottom: 10px;
  opacity: 1;
  transition-property: opacity;
  &:hover {
    background: linear-gradient(#00649a, #005c8e);
  }
  ${props => props.disabled && disabledColor}
`;

export const disabledColor = css`
  border-color: ${props => props.theme.form.color.disabledBorder};
  background: ${props => props.theme.bg.disabled};
  color: ${props => props.theme.text.color.disabled};
  opacity: 0.65;
  &:hover {
    background: ${props => props.theme.bg.disabled};
  } 
  cursor: not-allowed;
`;

export const LinkAnchor = Styled(Link)`
  cursor: pointer;
  user-select: none;
  color: #bdd1f8;
  &:hover {
    text-decoration: underline !important;
    opacity: 0.8;
    color: white;
  }
`;

export const ButtonWrapper = Styled(Button)`
  color: black;
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  padding: 7px;
  background-color: ${props => props.theme.bg.button};
  border-color: ${props => props.theme.bg.button};
  cursor: pointer;
  &:active {
    background-color: ${props => props.theme.bg.buttonActive};
  }
`;

export const TaskTitle = Styled.h5`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.text.color.light};
  padding-right: 5px;
  padding-bottom: 8px;
  padding-top: 8px;
  margin: 0;
  display: inline-block;
`

export const TaskWrapper = Styled.div`
  font-size: 14px;
  color: ${props => props.theme.text.color.panel};
  padding-left: 10px;
  border-radius: 5px;
  &:hover {
    background-color: rgba(256,256,256,0.05);
    cursor: pointer;
  }
`;

export const StatusBar = Styled.div`
  padding: 7px 14px;
  text-align: center;
  font-size: 14px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: inline-block;
  
  ${props => props.status === "pending" && pendingStatusBar};
  ${props => props.status === "success" && SuccessTaskIcon};
`;

const pendingStatusBar = css`
  background-color: ${props => props.theme.bg.pending};
  color: ${props => props.theme.text.color.pending};
`;

export const TaskIcon = Styled(FontAwesomeIcon)`
  float: left;
  font-size: 45px;
  padding: 0;
  margin-right: 10px; 
  border-radius: 18px;
  ${props => props.status === "pending" && PendingTaskIcon };
  ${props => props.status === "success" && SuccessTaskIcon };
`;

const PendingTaskIcon = css`
  color: ${props => props.theme.bg.pending };
  background-color: ${props => props.theme.text.color.pending };
  border: 1px solid white;
`;

const SuccessTaskIcon = css`
  color: ${props =>  props.theme.text.color.success };
  background-color: ${props => props.theme.bg.success};
  border: 1px solid white;
  padding: 5px;
`;

export const SubtaskWrapper = Styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  &:hover {
    background-color: rgba(256,256,256,0.05);
    cursor: pointer;
    border-radius: 5px;
  } 
  height: 65px;
`;

export const TaskTextContainer = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PointerArrow = Styled.div`
  height: 16px;
  width: 16px;
  border-right: 1px solid ${props => props.theme.text.color.danger};
  border-top: 1px solid ${props => props.theme.text.color.danger};
  transform: rotate(45deg);
  margin-right: 10px;
  border-radius: 2px;
`;

export const TaskConnector = Styled.div`
  border-left: 1px solid ${props => props.theme.text.color.panel};
  border-bottom: 1px solid ${props => props.theme.text.color.panel};
  height: 32px;
  width: 16px;
  margin-right: 5px;
  display: inline-block;
  margin-left: 15px;
  align-self: flex-start;
`;