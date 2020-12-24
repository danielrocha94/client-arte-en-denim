import React from 'react';
import {UserAvatarContainer, UserAvatarImg, ActiveUser, UserStatus} from './style';
import Avatar from './avatar2.png';

const UserAvatar = (props) => {
  return (
    <UserAvatarContainer>
      <UserAvatarImg src={Avatar}/>
      {props.status && <UserStatus status={props.status}/>}

      {/* {props.isActive && <ActiveUser/> } */}
    </UserAvatarContainer>
  )
}

export default UserAvatar;