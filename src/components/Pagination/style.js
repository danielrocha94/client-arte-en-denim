import Styled from 'styled-components';

export const PaginationWrapper = Styled.div`
  text-align: right;
  font-size: 18px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  user-select: none;
`;

export const IconButton = Styled.div`
  padding: 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const PageNumber = Styled.div`
  padding: 5px;
  color: ${props => props.active && "white"};
  cursor: pointer;
  &:hover {
    color: white;
  }
`;