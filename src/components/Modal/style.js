import Styled from 'styled-components';
import {Modal, Button} from 'react-bootstrap';

export const ModalContainer = Styled(Modal)`

`;

export const ModalHeader = Styled(Modal.Header)`
  background-color: ${props => props.theme.bg.modal};
  color: ${props => props.theme.text.color.light};
  border-bottom: 1px solid ${props => props.theme.color.modalBorder};
  button {
    color: white;
    text-shadow: none;
    font-weight: 400;
    font-size: 2rem;
    &:hover {
      color: white;
    }
  }
`;

export const ModalTitle = Styled(Modal.Title)`
  
`;

export const ModalBody = Styled(Modal.Body)`
  background-color: ${props => props.theme.bg.modal};
  color: ${props => props.theme.text.color.panel};
  border: none;
`;

export const ModalFooter = Styled(Modal.Footer)`
  background-color: ${props => props.theme.bg.modal};
  color: ${props => props.theme.text.color.panel};
  border-top: 1px solid ${props => props.theme.color.modalBorder};
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = Styled(Button)`
  background-color: ${props => props.theme.bg.cancel};
  border-color: ${props => props.theme.bg.cancel};
  &:hover {
    background-color: ${props => props.theme.bg.cancel};
    border-color: ${props => props.theme.bg.cancel};
    opacity: 0.9;
  }
`;

export const SaveButton = Styled(Button)`
  border-color: ${props => props.theme.bg.pending};
  background-color: ${props => props.theme.bg.pending};
  &:hover{
    border-color: ${props => props.theme.bg.pendingHover};
    background-color: ${props => props.theme.bg.pendingHover};
  }
`;