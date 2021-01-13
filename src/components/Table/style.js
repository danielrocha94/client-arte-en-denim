import Styled, {css} from 'styled-components';
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
  box-shadow: inset 0 -1px #E3E9EE;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 10px;
  text-align: left;
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  position: sticky;
  background-color: ${props => !props.header && props.theme.bg.tableOdd };
  top:0;
`;

export const Td = Styled.td`
  text-align: left;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 8px;
  padding-left: 8px;
  box-shadow: inset 0 -1px #E3E9EE;
  font-weight: ${props => props.bold ? "600" : "400" };
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
export const ColoredDatumWrapper = Styled.div`
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  width: 75px;
  margin: 0;
  ${props => props.variant === "success" && SuccessDatum};
  ${props => props.variant === "warning" && WarningDatum};
  ${props => props.variant === "danger" && DangerDatum};
`;

const SuccessDatum = css`
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #0e6245;
`;

const WarningDatum = css`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  width: 90px;
`;

const DangerDatum = css`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  width: 90px;
`;

export const ColoredDatumIcon = Styled(FontAwesomeIcon)`
  margin-left: 5px;
  font-size: 12px;
`;

export const TableFooterWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
`;