import React, { Component } from 'react';
import {
  TopTabs,
  TopTabsLink,
} from './style'

import {faTimes} from '@fortawesome/free-solid-svg-icons';

const HeaderTabs = (props) => {
  return (
    <TopTabs onClick={props.onClick}>
      <TopTabsLink active={props.active === props.children}>{props.children}</TopTabsLink>
    </TopTabs>
  )
}

export default HeaderTabs;