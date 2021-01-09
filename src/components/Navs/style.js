import Styled, {css} from 'styled-components';

export const TabGroupContainer = Styled.div`
  display: flex;
  margin-bottom: 16px;
  box-sizing: border-box;
  box-shadow: inset 0 -1px #e3e8ee;
  padding-top: 8px;
`;

export const TabContainer = Styled.div`
  padding: 5px 5px 5px 0;
  margin-right: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #5469d4;
  &:hover {
    color: #1A1F36;
  }
  ${props => props.active ? ActiveTab : DefaultTab}
`;

export const ActiveTab = css`
  color: #5469d4;
  border-bottom: 2px solid #5469d4;
  &:hover {
    color: #5469d4;
  }
`;

export const DefaultTab = css`
  color: #697386;
`;

export const TabText = Styled.li`
  list-style: none;
`;