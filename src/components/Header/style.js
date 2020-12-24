import Styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/* Default header*/

export const StyledNav = Styled(Nav)`
  background-color: ${props => props.theme.bg.header};
  color: ${props => props.theme.text.color.default};
  border-bottom: 1px solid #27303e;
  padding: 8px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
  box-sizing: border-box;
`;

export const HeaderTitle = Styled.div`
  font-size: 22px;
  display: inline-block;
  color: rgba(255,255,255, .87 );
  line-height: 24px;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  padding-left: 15px;
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