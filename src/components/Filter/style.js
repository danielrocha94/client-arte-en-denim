import Styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Button} from '@material-ui/core';

export const AddFilterWrapper = Styled.div`
  align-items: center;
  display: flex;
  box-sizing: border-box;
  // box-shadow: inset 0 -1px 0 #e0e0e0;
  flex-shrink: 0;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  outline: none;
  // padding: 8px 12px 8px 16px;
  padding-top: 16px;
  position: relative;
  width: 100%;
`;

export const SelectedFilterWrapper = Styled.li`
  align-items: center;
  background: #e0e0e0;
  border-radius: 32px;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0,0,0,0.87);
  height: 32px;
  margin: 4px 8px 4px 0;
  max-width: 90%;
  outline: none;
  padding: 0 6px 0 16px;
  position: relative;
  white-space: nowrap;
`;

export const SelectedFilterCloseWrapper = Styled.div`
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
`;

export const SelectedFilterCloseIcon = Styled(FontAwesomeIcon)`
  font-size: 14px;
  color: #9e9e9e;
  align-self: center;
  vertical-align: -0.125em;
`;

export const AddFilterInputWrapper = Styled.li`
  position: relative;
  display: inline;
  flex: 1 1 0%;
`;

export const AddFilterInputContainer = Styled.div`
  opacity: 1;
  align-items: center;
  border: 1px dashed rgba(0,0,0,.26);
  border-radius: 32px;
  box-sizing: border-box;
  color: rgba(0,0,0,.54);
  display: flex;
  height: 32px;
  left: 0;
  bottom: -16px;
  padding: 0 16px 0 8px;
  margin: 0;
  position: absolute;
  transition: opacity .1s cubic-bezier(0.4,0.0,0.2,1);
  cursor: text;
`;

export const AddFilterInputField = Styled.input`
  width: 100%;
  font-size: 14px;
  padding: 0 0 0 0;
  min-width: 200px;
  height: 40px;
  border: none;
  outline: none;
`;

export const AddFilterInputIconContainer = Styled.div`
  color: rgba(0,0,0,.54);
  width:32px;
  text-align: center;
`;

export const AddFilterInputIcon = Styled(FontAwesomeIcon)`

`;

export const ClearFiltersWrapper = Styled.div`
  color: rgba(0,0,0,0.54);
  margin: 8px;
  line-height: 20px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

/* Filter dropdown */

export const FilterDropdownWrapper = Styled.div`
  width: 371px;
  transform: translate(0px, 8px);
  opacity: 1;
  z-index: 999;
  left: auto;
  right: auto;
  max-height: 214px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 2px 3px #bdbdbd;
  box-sizing: border-box;
  font-size: 15px;
  max-width: 371px;
  position: absolute;
  outline: none;
  overflow-y: auto;
  list-style: none;
`;

export const FilterDropdownItemContainer = Styled.div`
  font-size: 16px;
  line-height: 40px;
  align-self: baseline;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  color: #222;
  display: block;
  &:hover {
    background-color: #eeeeee;
  }
`;

/* Filter Text Box*/

export const FilterTextBoxWrapper = Styled.div`
  animation: zoomIn .14s cubic-bezier(0.0,0.0,0.2,1) both;
  border-radius: 2px;
  box-shadow:0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
  max-width: 244px;
  display: flex;
  justify-content: space-between;
  cursor: default;
  position: absolute;
  top: -28px;
`;

export const CloseIcon = Styled(FontAwesomeIcon)`
  font-size: 24px;
  font-weight: 200;
  cursor: pointer;
`;

export const TextInputContainer = Styled.div`
  max-height: calc(100vh - 360px);
  overflow-y: auto;
  background: #fff;
  padding: 0 18px 8px 18px;
  color: rgba(0,0,0,0.87);
  padding-top: 16px;
`;

export const ApplyButtonContainer = Styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  height: 56px;
  justify-content: flex-end;
  color: rgba(68,68,68,0.502);
  padding-right: 6px;
`;

export const ApplyButton = Styled(Button)`
  font-weight: 700;
  color: white;
`;