import React from 'react';
import {TabSection, TabTitle} from './style';

const TabContentSection = (props) => {
  return (
    <TabSection>
      <TabTitle>{props.title}</TabTitle>
      {props.children}
    </TabSection>
  )
}

export default TabContentSection;