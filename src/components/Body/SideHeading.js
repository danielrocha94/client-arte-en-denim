import React from 'react';
import {
  SideHeadingWrapper,
  SideHeadingContainer,
  SideHeadingIcon,
  SideHeadingText
} from './style';

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