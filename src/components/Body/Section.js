import React from 'react';
import {SectionWrapper, SectionHeader, SectionHeaderTitle, HeaderCarat, SectionContainer} from './style';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

const Section = (props) => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionHeaderTitle>
          {props.title}
        </SectionHeaderTitle>
        <HeaderCarat icon={faAngleDown}/>
      </SectionHeader>
      <SectionContainer>
        {props.children}
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section;