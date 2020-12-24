import React, {useState} from 'react';
import {MoneyInputContainer, MoneySymbolDisplayer, MoneyNumberInput} from './style';
import {BasicInputLabel, BasicErrorField} from './';
import {validateFields} from '../../utils/validations/forms';

const MoneyInput = (props) => {

  let [showAlert, setShowAlert] = useState(props.error && props.error.showAlert);
  let [showErrorField, setShowErrorField] = useState(false);
  let [validationMessages, setValidationMessages] = useState([]);
  let errorPresent = props.validators;

  const handleChange = (e) => {
    e.persist()
    if(errorPresent){
      let valMessages = validateFields(props);      
      setValidationMessages(valMessages);
      setShowAlert(!valMessages.validInput);
      setShowErrorField(!valMessages.validInput)
      props.sendFieldValidation && props.sendFieldValidation(e)
    }
  }
  
  return (
    <MoneyInputContainer>
      <BasicInputLabel
          required={(props.required || (props.validators && props.validators.required))}
          for={props.id}
          errorField={showErrorField}
          tooltip="Campo Requerido"
      >
        {props.title}
      </BasicInputLabel>
      <MoneySymbolDisplayer
        style={{borderRight: "0", borderBottomRightRadius: 0, borderTopRightRadius: 0}}
        errorField={showErrorField}
        >$</MoneySymbolDisplayer>
      <MoneyNumberInput
        type="text"
        min="1"
        name={props.name  }
        placeholder={props.placeholder}
        value={props.value} 
        onChange={props.onChange}
        onBlur={handleChange}
        errorField={showErrorField}
        id={props.id}
      />
      <MoneySymbolDisplayer
        style={{borderLeft: "0", borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}        
        errorField={showErrorField}
        >.00</MoneySymbolDisplayer>
      <BasicErrorField
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        validationMessages={validationMessages}
        errorPresent={errorPresent}
        showErrorField={showErrorField}
        style={{ marginRight: "-95px", marginBottom: "-4px"}}
      />
    </MoneyInputContainer>
  );
};

export default MoneyInput;