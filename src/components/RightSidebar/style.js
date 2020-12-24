import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switchery';

export const PageRightSidebar = Styled.div`
 width: 230px;
 background: #131c29;
 height: 100%;
 min-height: 100%;
 top: 0;
 z-index: 5;
 position: fixed;
 box-shadow: 0 0 9px rgba(0,0,0,.3);
 right: 0;
 user-select: none;
`;

export const RightSidebarTop = Styled.div`
  display: block;
  height: 56px;
  background: #131c29;
  color: rgba(225, 235, 245, 0.3);
`;

export const RightSidebarTabs = Styled.ul`
  float: left;
  width: 172px;
  height: 56px;
  border-bottom: 0;
  padding: 0;
  margin: 0;
`;

export const TopTabs = Styled.li`
  width:50%;
  float: left;
  margin-bottom: -1px;
  position: relative;
  display: block;
`;

export const TopTabsLink = Styled.a`
  padding: 10px 0px;
  display: block;
  height: 56px;
  position: relative;
  text-transform: uppercase;
  line-height: 36px;
  text-align: center;
  color: ${props => props.active ? "rgba(225,235,245,.9) !important" : "#e1ebf5"};
  cursor: ${props => props.active ? "default" : "pointer"};
  font-size: 14px;
`;

export const RightSidebarClose = Styled.a`
  float: right;
  color: rgba(225,235,245,.3);
  font-size: 20px;
  padding: 2px 19px;
  height: 56px;
  line-height: 56px;
  cursor: pointer;
`;

export const IconClose = Styled(FontAwesomeIcon)`
  line-height: 1;
  font-weight: 400;
  font-size: 18px;
`;

export const TabPanel = Styled.div`

`;

export const TabTitle = Styled.span`
  padding: 10px 25px;
  font-weight: 400;
  font-size: 12px;
  display: block;
  margin: 5px 0 0;
  background: 0 0;
  color: rgba(225,235,245,.7);
  opacity: 0.6;
`;

export const SettingToggleItemContainer = Styled.li`
  padding: 12px 25px;
  font-size: 13px;
  color: rgba(225,235,245,.9);
  list-style: none;
`;

export const SettingToggleItemName = Styled.span`
  
`;

export const SettingToggleSwitch = Styled(Switch)`
  float: right;
`;

export const TabSection = Styled.div`
`;