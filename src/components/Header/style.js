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

export const HeaderTitle = Styled(Link)`
  font-size: 24px;
  display: inline-block;
  color: rgba(255,255,255, .87 );
  line-height: 24px;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  margin-left: 14px;
  padding: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: rgba(255,255,255, 1 );
    background-color: rgba(255,255,255, 0.1 );
    border-radius: 20px;
  }
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


export const HeaderImgWrapper = Styled.div`
  padding: 4px 6px;
  vertical-align: middle;
`;

export const HeaderImgContainer = Styled.div`
  padding: 4px;
  vertical-align: middle;
  border-radius: 2px;
  box-sizing: border-box;
  height: 40px;
  width: 40px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255,255,255,0.08);
    border-radius: 50%;
  }
`;

export const HeaderImgImage = Styled.img`
  height: 32px;
  width: 32px;
  border: 0;
  background-size: 32px 32px;
  border-radius: 50%;
  margin: 0;
  position: relative;
  z-index: 0;
`;

export const HeaderTitleImg = Styled.img`
  height: 45px;
  margin-left: 20px;
`;