import React, { Component } from 'react';
import {StyledNav, HeaderTitle} from './style';

class DefaultHeader extends Component {
  render() {
    return (
      <StyledNav>
        <HeaderTitle>{this.props.children}</HeaderTitle>
      </StyledNav>
    );
  }
}

export default DefaultHeader;