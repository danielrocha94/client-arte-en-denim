import React from 'react';
import {SectionWrapper, SectionHeader, HeaderIconContainer, SectionHeaderTitle, HeaderCarat, SectionContainer} from './style';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Section = (props) => {
  return (
    <SectionWrapper>
      { !props.hideHeader &&
        <SectionHeader>
          {props.title &&
            <SectionHeaderTitle>
              {props.title}
            </SectionHeaderTitle>
          }
          <HeaderIconContainer>
            <HeaderCarat icon={faAngleDown}/>
          </HeaderIconContainer>
        </SectionHeader>
      }
      <SectionContainer>
        {props.children}
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section;