import React from 'react';
import {SectionFooterWrapper} from './style';

const SectionFooter = (props) => {
  return (
    <SectionFooterWrapper>
      {props.children}
    </SectionFooterWrapper>
  )
}

export default SectionFooter;