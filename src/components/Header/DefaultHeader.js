import React, { Component } from 'react';
import HeaderImg from './HeaderImg';
import {StyledNav, HeaderTitle, HeaderTitleImg} from './style';
import ADNBanner from './ADN-Banner-white.png'

class DefaultHeader extends Component {
  render() {
    return (
      <StyledNav>
        <HeaderTitleImg src={ADNBanner} to={"/clientes"}/>
        {this.props.children &&
          <HeaderTitle to={"/clientes"}>
          </HeaderTitle>
        }
        <HeaderImg />
      </StyledNav>
    );
  }
}

export default DefaultHeader;