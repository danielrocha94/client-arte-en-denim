import React, {useState} from 'react';
import {HeaderImgWrapper, HeaderImgContainer, HeaderImgImage} from './style';
import {MaterialMenu} from '../Menu';

const HeaderImg = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick= (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <HeaderImgWrapper>
      <HeaderImgContainer 
        onClick={handleClick}
      >
        <HeaderImgImage src="https://lh3.google.com/u/2/ogw/ADGmqu9KKIyBYT2ZtkSZtB5BmjE12THQZcPqhrhotqjC=s32-c-mo"/>
      </HeaderImgContainer>
      <MaterialMenu
        id="header-menu"
        onClose={handleClose}
        anchorEl={anchorEl}
        onLogout={props.onLogout}
      >
        
      </MaterialMenu>
    </HeaderImgWrapper>
  );
}

export default HeaderImg;