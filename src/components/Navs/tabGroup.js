import React from 'react';
import {TabGroupContainer} from './style';

const TabGroup = (props) => {
  return (
    <TabGroupContainer
      variant="tabs" 
      defaultActiveKey={props.defaultActiveKey}
      id={"uncontrolled-tab-example"}
    >
      {props.children}
    </TabGroupContainer>
  )
}

export default TabGroup;