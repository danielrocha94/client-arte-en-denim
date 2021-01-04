import React from 'react';
import {
  SideHeadingWrapper,
  SideHeadingContainer,
  SideHeadingIcon,
  SideHeadingText
} from './style';

import {faCog} from '@fortawesome/free-solid-svg-icons';

const SideHeading = (props) => {
  return (
    <SideHeadingWrapper>
      <SideHeadingContainer>
        <SideHeadingIcon icon={props.icon}/>
        <SideHeadingText>
          {props.children}
        </SideHeadingText>
      </SideHeadingContainer>
    </SideHeadingWrapper>
  )
}

export default SideHeading;