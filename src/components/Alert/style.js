import Styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

export const AlertContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 65px;
  z-index: 1;
`;

export const StyledAlert = Styled(Alert)`
  width: 100%;
  display: block;
  margin-bottom: 3px !important;
  margin-right: 3px;
`;

export const StyledInformation = Styled(Alert)`
  position: relative;
  right: -104%;
  top: -48px;
  z-index: 10;
  display: inline-block;
  background-color: ${props => props.theme.bg.error};
  color: ${props => props.theme.text.color.error};
  button {
    &:hover {
      color: white;
    }
  }
`;

export const NoHeightContainer = Styled.div`
  height: 0;
`;

export const ContainerPointer = Styled.div`
  background-color: ${props => props.theme.bg.error};
  width: 35px;
  height: 35px;
  transform: rotate(45deg);
  border-radius: 3px;
  right: 33px;
  top: -2px;
  z-index: -1;
  position: relative;
`;