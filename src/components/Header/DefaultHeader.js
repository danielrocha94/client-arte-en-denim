import React, { Component } from 'react';
import HeaderImg from './HeaderImg';
import {StyledNav, HeaderTitle} from './style';

class DefaultHeader extends Component {
  render() {
    return (
      <StyledNav>
        <HeaderTitle to={"/clientes"}>{this.props.children}</HeaderTitle>
        <HeaderImg />
      </StyledNav>
    );
  }
}

export default DefaultHeader;