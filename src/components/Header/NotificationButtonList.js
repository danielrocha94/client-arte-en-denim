import React from 'react';
import {NotificationBtnList} from './style';

const NotificationButtonList = (props) => {
  return (
    <NotificationBtnList>
      {props.children}
    </NotificationBtnList>
  );
};

export default NotificationButtonList;