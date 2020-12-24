import Styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Table = Styled.table`
 width: 100%;
 margin: 0 auto;
 clear: both;
 border-collapse: separate;
 border-spacing: 0;
 padding-bottom: 10px;
`;

export const Thead = Styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Tbody = Styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Tr = Styled.tr`
  display: table-row;
  vertical-align: inherit;
  background-color: ${props => props.odd ? props.theme.bg.tableEven : props.theme.bg.tableOdd};
  border: 1px;
  border-bottom: rgb(128, 128, 128);
  border-top: rgb(128, 128, 128);
  &:hover {
    background-color: ${props => !props.header && props.theme.bg.tableHover };
  };
`;

export const Th = Styled.th`
  cursor: pointer;
  min-width: 40px;
  border-bottom: 1px solid rgb(46,63,91);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 10px;
  text-align: left;
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  position: sticky;
  border-right: 1px solid #e7e7e7;
  background-color: ${props => !props.header && props.theme.bg.tableOdd };
  top:0;
`;

export const Td = Styled.td`
  text-align: left;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 8px;
  border-bottom: 1px solid rgb(46,63,91);
  border-right: 1px solid #dbdbdb;
  &:hover {
    color: ${props => props.theme.text.color.tableHover };
    font-weight: 600;
  };
`;

export const SortIcon = Styled(FontAwesomeIcon)`
  margin-right: 5px;
  margin-left: 0px;
`;

export const ShowMore = Styled.button`
  margin: 0;
  padding: 2px;
  background-color: inherit;
  border: 0;
  border-radius: 10px;
  text-align: center !important;
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: #999999;
  &:hover {
    /*background-image: linear-gradient( #293851, #3e4b62, #293851);*/
    background-color: #3e4b62;
    color: white;
    cursor: pointer;
  }
  &:focus {
    outline:none;
  }
`