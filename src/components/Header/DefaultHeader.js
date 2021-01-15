import React, {useState} from 'react';
import HeaderImg from './HeaderImg';
import {StyledNav, HeaderTitle, HeaderTitleImg, HeaderTitleImgLink} from './style';
import ADNBanner from './ADN-Banner-white.png'

const DefaultHeader = (props) => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <StyledNav>
      <HeaderTitleImgLink to={"/clientes"}>
        <HeaderTitleImg src={ADNBanner}>
        </HeaderTitleImg>
      </HeaderTitleImgLink>

      {props.children &&
        <HeaderTitle to={"/clientes"}>
        </HeaderTitle>
      }
      {props.isAuthenticated &&
        <HeaderImg 
          onClick={setMenuOpen} 
          open={menuOpen}
          onLogout={props.onLogout}
        />
      }
    </StyledNav>
  );
}

export default DefaultHeader;