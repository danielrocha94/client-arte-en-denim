import React, {useRef} from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';

const BasicTooltip = (props) => {
  const tooltipRef = useRef(null);
  return (
    <React.Fragment>
    <span
      href="#"
      ref={tooltipRef}
      style={{color: "#EC5E69", cursor: "pointer"}}
    > *</span>
    <Overlay
      placement={props.placement}
      show={props.show}
      target={tooltipRef.current}
    >
      <Tooltip>
        {props.children}
      </Tooltip>
    </Overlay>
  </React.Fragment>
  );
}

export default BasicTooltip;