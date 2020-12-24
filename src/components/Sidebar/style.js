import Styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/* Menu Item */

export const LiItem = Styled.li`
  list-style-type: none;
  position: relative;
  cursor: pointer;
`;

export const Anchor = Styled.a`
  color: ${props => props.active ? props.theme.text.color.hover : props.theme.text.color.default} !important;
  background: ${props => props.active && props.theme.bg.hoverMenuItem};
  font-weight: 500;
  display: block;
  font-size: ${props => props.theme.text.size};
  padding: 9px 18px;
  margin: 5px 10px;
  border-radius: 4px;
  position: relative;
  &:hover {
    background: ${props => props.theme.bg.hoverMenuItem};
    color: ${props => props.theme.text.color.hover} !important;
  }
`
export const isSelectedMenuItem = css`
  color: ${props => props.selectedColor || props.theme.text.color.danger};
`;

export const ItemIcon = Styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 17px;
  vertical-align: text-top;
  line-height: 19px;
  ${props => props.isSelected && isSelectedMenuItem};
`

export const AngleIcon = Styled(FontAwesomeIcon)`
  display: inline-block;
  float: right;
  font-size: 15px;
  vertical-align: text-top;
  color: ${props => props.theme.text.color.dim} !important;
  margin-top: 3px;
  &:hover {

  }
`
export const SpanText = Styled.span`
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
`

/* Sidebar */

export const PageSidebar = Styled.div`
  min-height: 100vh;
  height: 100%;
  float: left;
  z-index: 100;
  position: relative;
  overflow: hidden;
  width: 200px;
  background: ${props => props.theme.bg.leftSidebar};
  user-select: none;
`
export const LogoBox = Styled.a`
  padding: 14px 28px;
  color: ${props => props.theme.text.color.default} !important;
  height: 56px;
  /* font-weight: 700; */
  font-size: 18px;
  text-shadow: 2px 2px 2px rgba(80, 80, 80,1);
  font-family: 'Lobster', cursive;
  letter-spacing: 0.5 px;
  text-align: center;
  display: block;
  z-index: 999;
  background: ${props => props.theme.bg.leftSidebar};
  &:hover {
    text-decoration: none;
    color: white !important;
    cursor: pointer;
  }
`
export const SidebarContent = Styled.div`
`

export const AccordionMenu = Styled.ul`
  padding: 0;
  margin: 0;
`

export const SubmenuListItem = Styled.li`
  
`;

export const SubmenuAnchor = Styled(Link)`
  cursor: pointer;
  width: 100%;
  display: block;
  padding-top: 10px;
  padding-bottom: 8px;
  font-size: 14px;
  color: ${props => props.theme.text.color.default} !important;
  &:hover {
    text-decoration: none;
    opacity: 1;
    color: rgba(225,235,245,.95) !important;
  }
`;