import React from 'react';
import Styled from 'styled-components';

const MenuDiv = Styled.li`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #1e2633;
  margin: 10px 0;
`

const MenuDivider = () => {
  return (
    <MenuDiv/>
  );
};

export default MenuDivider;