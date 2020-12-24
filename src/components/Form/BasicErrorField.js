import React from 'react';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {ExclamationIcon} from './style'
// import {InformationAlert} from '../Alert';

const BasicErrorField = props => {
  return (
    <>
      {props.showErrorField && 
        <ExclamationIcon
          icon={faExclamationCircle}
          style={props.style}
          onClick={() => props.setShowAlert(!props.showAlert)}/>
        }
      {/* {props.errorPresent && props.showAlert && false &&  
        <InformationAlert show={props.showAlert} onClose={() => props.setShowAlert(false)}>
          { props.validationMessages.map(err => {
              if(!!err && !err.valid) {
                return <li>{err.error}</li>;
              }
              return <React.Fragment/>
            })
          }
        </InformationAlert>
      } */}
    </>
  )
}

export default BasicErrorField;