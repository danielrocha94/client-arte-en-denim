import React from 'react';
import {PageTitle} from './style';

const Heading = (props) => {
  return (
    <PageTitle style={props.style}>
      {props.title || props.children}
    </PageTitle>
  );
};

export default Heading;