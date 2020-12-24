import React, {useState, useEffect} from 'react';
import {StyledAlert} from './style';


function FormFlashMessage(props) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (props.closeTime) {
      setTimeout(() => {
        setShow(false);
      }, props.closeTime || 15000)
    }
  })

  if(show) {
    return (
      <StyledAlert variant={props.variant || "primary"} onClose={() => setShow(false)} dismissible>
        <StyledAlert.Heading>{props.heading}</StyledAlert.Heading>
        {props.children || props.variant}
        {props.footer &&
          <>
            <hr />
            <p className="mb-0">
              {props.footer}
            </p>
          </>
        }
      </StyledAlert>
    )
  }
  return (<React.Fragment/>)
}

export default FormFlashMessage;