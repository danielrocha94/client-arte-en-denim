import Styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const FormGroup = Styled.div`
  margin-bottom: 15px;
`;

export const InputLabel = Styled.label`
  font-weight: 600;
  color: ${props => props.theme.text.color.label};
  padding-bottom: 5px;
  font-size: 14px;
  display: block;
  ${props => props.errorField && !props.errorField.valid && errorLabel};
  ${props => props.hover && css`${props.hover}`};
`;

const errorInputField = css`
  border-color: ${props => props.theme.bg.error};
  color: ${props => props.theme.text.color.danger} !important;
  background-image: ${props => props.theme.bg.errorImg};
  &:hover {
    border-color: ${props => props.theme.bg.errorHover};
  }

  &:focus {
    border-color: ${props => props.theme.bg.error};
  }
  ::selection {
    color: ${props => props.theme.text.color.danger};
  }
`;

const errorLabel = css`
  color: ${props => props.theme.text.color.danger};
`;

const errorMoneySymbolDisplayer = css`
  border-color: ${props => props.theme.bg.error};
  background-color: ${props => props.theme.bg.danger};
  &:hover {
    border-color: ${props => props.theme.bg.errorHover};
  }

  &:focus {
    border-color: ${props => props.theme.bg.error};
  }
`;

export const ExclamationIcon = Styled(FontAwesomeIcon)`
  color: rgb(179, 20, 18);
  background-color: white;
  border-radius: 16px;
  font-size: 24px;
  margin-left: -30px;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */    
`;

export const DefaultInput = Styled.input`
  border-radius: 4px;
  min-height: 44px;
  cursor: text;
  transition: background-color .24s,box-shadow .24s;
  text-align: left;
  white-space: nowrap;
  font-weight: 400;
  border: ${props => props.theme.form.color.inputBorder};
  color: ${props => props.theme.text.color.input};
  background: ${props => props.theme.bg.input};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  display: inline-block;
  width: 100%;
  height: 34px;
  line-height: 28px;
  margin:0;
  vertical-align: middle;
  &:focus {
    outline: none !important;
    border: ${props => props.theme.form.color.inputBorder};
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(58, 151, 212, 0.36) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  &:hover {
    border: ${props => props.theme.form.color.inputBorderHover};
  }
  ${props => props.errorField && !props.errorField.valid && errorInputField};
`;

export const DefaultSelect = Styled.select`
  border-radius: 4px;
  box-shadow: none;
  border: ${props => props.theme.form.color.inputBorder};
  color: ${props => props.theme.text.color.input} !important;
  background: ${props => props.theme.bg.input};
  padding: 0px 10px;
  font-size: 16px;
  width: 100%;
  height: 34px;
  line-height: 1.43;
  &:hover {
    border: ${props => props.theme.form.color.inputBorderHover};
  }
  &:focus {
    outline: none !important;
    border: ${props => props.theme.form.color.inputBorder};
    box-shadow: 0 0 10px #617dae;
  }
  ${props => props.errorField && !props.errorField.valid && errorInputField};
`;

export const DefaultSelectOption = Styled.option`

`;
export const MoneyInputContainer = Styled(FormGroup)`
  display: table-cell;
  padding-right: 30px;
  min-width: 154px;
`;
export const MoneySymbolDisplayer = Styled.span`
  border-radius: 4px;
  background-color: #202f45;
  border: 1px solid #202f45;
  color: ${props => props.theme.text.color.input};
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.43;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  height: 34px;
  ${props => props.errorField && !props.errorField.valid && errorMoneySymbolDisplayer};
`;
export const MoneyNumberInput = Styled(DefaultInput)`
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  border-radius: 0px;
  box-shadow: none;
  border: 1px solid #324462;
  color: #d6d6d6;
  background: ${props => props.theme.bg.defaultClear};
  padding: 17px 12px;
  font-size: 16px;
  height: 34px;
  line-height: 1.43;
  text-align: center;
  vertical-align: middle;
  width: calc(100% - 80px);
  min-width: 57px;
  margin:0;
  display: inline-block;
  ${props => props.errorField && !props.errorField.valid && errorInputField};
`;

/* File Upload */

export const Dropzone = Styled.div`
  cursor: pointer;
  height: 200px;
  border: ${props => props.theme.form.color.inputBorder};
  background: ${props => props.theme.bg.defaultClear};
  padding: 0px;
  text-align: center;
  overflow: hidden;
  color: ${props => props.theme.text.color.dim};
  text-shadow: 2px 2px 4px #000000;
  &:hover{
    color: ${props => props.theme.text.color.hover};
    box-shadow: 0 0 10px #617dae;
    background-color: ${props => props.theme.bg.border};
    border: none;
  }
`;

export const FileUploadInput = Styled.input`
  min-height: 100%;
  height: 100px;
  display: inline-block;
  width: 100%;
  position: relative;
  padding: 220px 0 0 0;
  overflow: hidden;
  box-sizing: border-box;
  &:focus {
    outline-width: 0;
  }
`;

export const FileUploadIcon = Styled(FontAwesomeIcon)`
  font-size: 46px;
  display: block;
  margin: auto;
  text-shadow: 3px 3px 16px #272634;
  color: ${props => props.success && props.theme.text.color.successGreen};
`
export const FileUploadText = Styled.span`
  font-weight: 500;
  font-size: 14px;
  z-index: 9;
`;


/* Pagination */

export const PagWrapper = Styled.div`
  padding-top: 10px;
`;

export const PaginationControl = Styled.span`
  float: right;
`;

export const PagButton = Styled.a`
  border-radius: 2px;
  border: 1px solid transparent;
  padding: 6px 12px;
  padding: inline-block;
  min-width: 1.5em;
  margin-left: 2px;
  text-align: center;
  text-decoration: none;
  cursor: ${ props => props.disabled ? "default" : "pointer"};
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  &:hover {
    color: ${props => !props.disabled && "#fff !important"}
    background-color: ${props => !props.disabled && "#293851"}
  }
  border-color: ${ props =>
    props.disabled ? 
      "transparent" : 
      (props.selected ? "#5893df" : "#2f4060")
  };
  color: ${ props => 
    props.disabled ? 
      "#666 !important" :
      ( props.selected ? 
        "#fff !important" :
        "rgba(225, 235, 245, 0.7) !important")};
  background-color: ${props => 
    props.disabled ? 
      "transparent" : 
      ( props.selected ? "#5893df" : "#23324e")};
`;

export const BasicCheckboxInput = Styled.input`
  margin-right: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  width: 18px;
  height: 18px;
  line-height: 2em;
  cursor: pointer;
`;

export const CheckboxWrapper = Styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const TitleWrapper = Styled.div`
  color: ${props => props.theme.text.color.formTitle};
  font-size: 18px;
  margin: 0 0 14px;
`;

export const TitleIcon = Styled(FontAwesomeIcon)`
  font-size: 18px;
  display: inline-block;
  margin-right: 15px;
  text-shadow: 3px 3px 16px #272634;`;