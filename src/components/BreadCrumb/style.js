import Styled from 'styled-components';

export const BreadcrumbContainer = Styled.nav`
  height: 33px;
  box-shadow: 0 8px 10px -9px rgba(0,0,0,.05), 0 3px 14px 2px rgba(0,0,0,.01), 0 5px 5px -3px rgba(0,0,0,.05);
  display: flex;
  padding-left: 30px;
  flex-wrap: no-wrap;
  font-size: 14px;
  align-items: center;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 10;
`;