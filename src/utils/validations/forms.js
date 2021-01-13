export const validateFields = (props) => {
  if(!props.validators.required && !!props.value === false) {
    return {validInput: true};
  }
  let validators = Object.entries(props.validators);
  let errorList = validators.map(validatorObj => {
    let [key, val] = validatorObj;
    switch(key) {
      case 'required':
        if(val) {
          return { 
            error: "Este campo no puede estar en blanco",
            showAlert: !props.value.length,
            type: 'required',
            valid: !!props.value.length,
          }
        }
      case 'selectionRequired':
        if(val) {
          let isValid = (props.value.length > 0);
          if(props.selectedIndex === 0) isValid = false;
          return { 
            error: "Debes seleccionar una opción de la lista",
            showAlert: !isValid,
            type: 'selectionRequired',
            valid: isValid,
          }
        }
      case 'length':
        let validationRes = {
          type: "length",
          valid: true,
          showAlert: false,
        };
        if(typeof val === "object") {   
          if(val.min && val.min >= props.value.length) {
            validationRes = {
              ...validationRes,
              error: `Este campo debe ser mayor a ${val.min} caracteres.`,
              showAlert: true,
              valid: false,
            }
          }
          if(val.max && val.max < props.value.length) {
            validationRes = {
              ...validationRes,
              error: `Este campo debe ser menor a ${val.max} caracteres.`,
              showAlert: true,
              valid: false,
            }
          }
        } else if (typeof val === "number") {
          if(val < props.value.length) {
            validationRes = {
              ...validationRes,
              error: `Este campo debe ser menor a ${val.max} caracteres.`,
              showAlert: true,
              valid: false,
            }
          }
        }
        return validationRes;
      case 'isNumber':
        let isNumberRes = {
          type: "isNumber",
          valid: true,
          showAlert: false,
        };
        if(!(/^[-+]?[0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?$/.test(props.value))) {
          isNumberRes = {
            ...isNumberRes,
            error: `Este campo solo acepta numeros`,
            showAlert: true,
            valid: false,
          }
        }
        return isNumberRes
      case 'isPositive': {
        let isPositiveRes = {
          type: "isPositive",
          valid: true,
          showAlert: false
        };
        if(!(/^[+]?[0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?$/.test(props.value))){
          isPositiveRes = {
            ...isPositiveRes,
            error: `Solo se permiten números positivos`,
            showAlert: true,
            valid: false
          }
        }
        return isPositiveRes;
      }
      case 'isEmail': {
        let isEmailRes = {
          type: 'isEmail',
          valid: true,
          showAlert: true
        };
        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(props.value))){
          isEmailRes = {
            valid: false,
            showAlert: false,
            error: `Por favor introduce un correo electronico valido`,
          }
        }
        return isEmailRes;
      }
      case 'equals': {
        let isValid = props.value === val;
          return { 
            error: "Confirmación de contraseña invalida.",
            showAlert: !isValid,
            type: 'passwordConfirmation',
            valid: isValid,
          }
      }
      default:
        return;
    }
  });
  errorList["validInput"] = errorList.filter(Boolean).every((x) => x.valid);
  return errorList;
}