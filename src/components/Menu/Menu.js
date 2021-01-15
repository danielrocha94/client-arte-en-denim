import React, {useState} from 'react';
import {Menu, MenuItem} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { MenuContainer } from './style';

const MaterialMenu = (props) => {
  return (
    <MenuContainer
      id={props.id}
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={props.onClose}
      TransitionComponent={Fade}
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <MenuItem onClick={props.onClose}>Inicio</MenuItem>
      <MenuItem onClick={() => {props.onClose(); props.onLogout()}}>Cerrar Sesión</MenuItem>
    </MenuContainer>
  )
}

export default MaterialMenu;