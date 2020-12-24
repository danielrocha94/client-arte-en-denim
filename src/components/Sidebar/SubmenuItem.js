import React from 'react';
import {SubmenuListItem, SubmenuAnchor} from './style';

const SubmenuItem = (props) => {
  return (
    <SubmenuListItem>
      <SubmenuAnchor to={props.link}>{props.text}</SubmenuAnchor>
    </SubmenuListItem>
  );
};

export default SubmenuItem;