import Styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const MenuContainer = Styled.div`
  display: flex;
  padding-top: 32px;
  padding-right: 48px;
  padding-left: 48px;
  // border: 1px solid black;
`;

export const MenuWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;  
  width: 100%;
  margin: 0;
  flex-wrap: wrap;
  box-sizing: content-box;
`;

export const MenuOptionContainer = Styled.div`
  flex: 0 0 33.3%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuOptionWrapper = Styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  cursor: pointer;
  border-radius: 5px;
  user-select: none;
  width: 130px;
  &:hover {
    background: #e0e0e0;
  }
`;

export const DescriptionText = Styled.div`
  color: #616161;
  font-size: 12px;
  margin-top: 4px;
  text-align: center;
`;

export const OptionName = Styled.div`
  font-weight: 700;
  padding-top: 20px;
  text-align: center;

`;

export const OptionIcon = Styled(FontAwesomeIcon)`
  color: #4285f4;
  font-size: 50px;
`;