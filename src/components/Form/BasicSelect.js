import React, {useState, useEffect, useRef} from 'react';
import { FormGroup, DefaultSelect } from './style.js'
import {BasicInputLabel, BasicErrorField} from '../Form';
import {validateFields} from '../../utils/validations/forms';

const BasicSelect = (props) => {
  
  const [showAlert, setShowAlert] = useState(props.error && props.error.showAlert);
  const [showErrorField, setShowErrorField] = useState(false);
  const [fieldObj, setFieldObj ] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [validationMessages, setValidationMessages] = useState([]);
  const isInitialMount = useRef(true);
  let errorPresent = props.validators;

  const handleChange = async(e) => {
    e.persist();
    return Promise
    .resolve(props.onChange(e))
    .then(setFieldObj(e.target))
    .then(setSelectedIndex(e.target.selectedIndex))
  }

  useEffect(()=> {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if(props.required || props.validators && props.validators.selectionRequired){
        let valMessages = validateFields({...props, selectedIndex: selectedIndex});
        let value = props.value;
        if (props.errors && props.errors.valid && !valMessages.validInput) {
          setValidationMessages(valMessages);
          setShowAlert(false)
          setShowErrorField(false);
        }
        setShowAlert(!valMessages.validInput);
        setShowErrorField(!valMessages.validInput);
        props.sendFieldValidation(fieldObj, value.length > 0);
      }
    }
  }, [selectedIndex]);

  return(
    <FormGroup>
      <BasicInputLabel
        required={props.required}
        for={props.id}
        errorField={showErrorField}
        tooltip="Selección requerida"
      >
        {props.title}
      </BasicInputLabel>
      <DefaultSelect
        id={props.id}
        onChange={handleChange}
        name={props.name}
        value={props.value}
        errorField={showErrorField}
      >
        <option value={props.defaultValue || "null"}>{props.defaultText || "Select an option"}</option>
        {props.options && props.options.map(opt => <option>{opt}</option>)}
        {props.children}
      </DefaultSelect>
      <BasicErrorField
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        validationMessages={validationMessages}
        errorPresent={errorPresent}
        showErrorField={showErrorField}
        
      />
    </FormGroup>
  )
}

export default BasicSelect;