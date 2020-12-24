import React from 'react';
import {ModalContainer, ModalHeader, ModalTitle, ModalBody, ModalFooter, CloseButton, SaveButton} from './style';

const DefaultModal = (props) => {
  return (
    <ModalContainer
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          {props.title}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        {props.children}
      </ModalBody>
      <ModalFooter>
        <CloseButton onClick={props.onHide}>Cerrar</CloseButton>
        {!!props.onSave && <SaveButton onClick={props.onSave}>Guardar cambios</SaveButton>}
      </ModalFooter>
    </ModalContainer>
  )
}

export default DefaultModal;