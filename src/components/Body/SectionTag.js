import React from 'react';
import {
  SectionTagWrapper,
  SectionTagHeader, 
  SectionTagContent
} from './style';

const SectionTag = (props) => {
  return (
    <SectionTagWrapper>
      <SectionTagHeader>
        {props.title}
      </SectionTagHeader>
      <SectionTagContent>
        {props.children}
      </SectionTagContent>
    </SectionTagWrapper>
  )
}

export default SectionTag;