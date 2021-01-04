import React from 'react';
import {
  BodyContent,
  BodyContentWrapper,
  BodyContentTitle,
  BodyContentMain,
} from './style';

import {SideHeading} from '../Body';

const Content = (props) => {
  return (
    <BodyContent>
      <BodyContentWrapper>
        <BodyContentTitle>
          <SideHeading icon={props.icon}>
            {props.title}
          </SideHeading>
        </BodyContentTitle>
        <BodyContentMain>
          {props.children}
        </BodyContentMain>
      </BodyContentWrapper>
    </BodyContent>
  )
}

export default Content;