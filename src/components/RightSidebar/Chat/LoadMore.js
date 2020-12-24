import React from 'react';
import {LoadMoreContainer} from './style';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const renderTooltip = (
    <Tooltip style={{zIndex: '10', }}>
      Load More
    </Tooltip>
  )

const LoadMore = (props) => {
  return (
    <OverlayTrigger
      placement="left"
      delay={400}
      overlay={renderTooltip}
    >
      <LoadMoreContainer>
        •••
      </LoadMoreContainer>
    </OverlayTrigger>
  )
}

export default LoadMore;