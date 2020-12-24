import React from 'react';
import {Panel, PanelTitle, PanelSubtitle} from './style';

const MainWrapper = (props) => {
  return (
    <Panel style={props.style}>
      <PanelTitle>
        {props.title}
        <PanelSubtitle>
          {props.subtitle}
        </PanelSubtitle>
      </PanelTitle>
      {props.children}
    </Panel>
  );
};

export default MainWrapper;