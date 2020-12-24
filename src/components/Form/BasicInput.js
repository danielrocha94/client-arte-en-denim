import React from 'react';
import {FormGroup, DefaultInput, InputLabel, ExclamationIcon} from './style.js'
import {validateFields} from '../../utils/validations/forms';
import {BasicErrorField, BasicInputLabel} from './';

class BasicInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlert: props.error && props.error.showAlert,
      showErrorField: false,
      validationMessages: [],
    }

    this.errorPresent = props.validators;
    this.handleChange = this.handleChange.bind(this);
    this.setShowAlert = this.setShowAlert.bind(this);
  }

  handleChange(e) {
    if(this.errorPresent) {
      let valMessages = validateFields(this.props);
      this.props.sendFieldValidation && this.props.sendFieldValidation(e, valMessages.validInput);
      return this.setState({
        validationMessages: valMessages,
        showAlert: !valMessages.validInput,
        showErrorField: !valMessages.validInput
      });
    }
  }

  setShowAlert = (e) => {
    this.setState({showAlert: e || !this.state.showAlert});
  }

  render(){
    let props = this.props;
    let {showErrorField, validationMessages, showAlert} = this.state;
    let errorPresent = this.errorPresent;
    let setShowAlert = this.setShowAlert;
    return (
      <FormGroup style={props.generalStyle}>
        {!props.hideIsRequired &&
          <BasicInputLabel
            required={(props.required || (props.validators && props.validators.required))}
            for={props.id}
            errorField={showErrorField}
            tooltip="Campo Requerido"
            style={props.style}
          >
            {props.title}
          </BasicInputLabel>
        }
        <DefaultInput
          id={props.id}
          type={props.type || "text"}
          name={props.name}
          style={props.style}
          placeholder={props.placeholder}
          onChange={this.props.onChange}
          onBlur={this.handleChange}
          errorField={showErrorField}
          onKeyPress={props.onKeyPress}
          value={props.value}/>

        <BasicErrorField
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          validationMessages={validationMessages}
          errorPresent={errorPresent}
          showErrorField={showErrorField}
        />
      </FormGroup>
    );
  }
};

export default BasicInput;