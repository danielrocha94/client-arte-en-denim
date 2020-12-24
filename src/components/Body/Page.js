import React from 'react';
import {InnerPage} from './style';

const Page = (props) => {
  return (
    <InnerPage style={props.style}>
      {props.children}
    </InnerPage>
  );
};

export default Page;