import React, {useState} from 'react';
import {StyledInformation, NoHeightContainer, ContainerPointer} from './style';

function InformationAlert(props) {
  if(props.show) {
    return (
      <NoHeightContainer>
        <StyledInformation onClose={props.onClose} dismissible>
          <NoHeightContainer>
            <ContainerPointer/>
          </NoHeightContainer>
          <StyledInformation.Heading>Error!</StyledInformation.Heading>
          {props.children}

        </StyledInformation>
      </NoHeightContainer>
    );
  }
  return (<NoHeightContainer></NoHeightContainer>)
}

export default InformationAlert;