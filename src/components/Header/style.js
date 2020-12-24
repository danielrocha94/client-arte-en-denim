import Styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/* Default header*/

export const StyledNav = Styled(Nav)`
  background-color: ${props => props.theme.bg.header};
  color: ${props => props.theme.text.color.default};
  border-bottom: 1px solid #27303e;
  padding: 0 15px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const ActionBtnList = Styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
`;

export const NotificationBtnList = Styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
`;

/* Header Btn*/

export const HeaderBtnLi = Styled.li`
  float: left;
  position: relative;
  display: block;
  height: 100%;
  background-color: none;
`;

export const HeaderBtnA = Styled(Link)`
  padding: 0 15px;
  height: 100%;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;

export const HeaderBtnFa = Styled(FontAwesomeIcon)`
  color: rgba(225,235,245,.95)!important;
`;