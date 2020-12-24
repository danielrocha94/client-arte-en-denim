import React, { Component } from 'react';
import {StyledNav} from './style';

class DefaultHeader extends Component {
  render() {
    return (
      <StyledNav>
        {this.props.children}
      </StyledNav>
    );
  }
}

export default DefaultHeader;