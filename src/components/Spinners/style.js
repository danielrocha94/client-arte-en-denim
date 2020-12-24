import Styled, {keyframes} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = Styled(FontAwesomeIcon)`
  animation: ${rotate} 2s linear infinite;
  color: #24344d;
  font-size: 70px;
  z-index: 9;
  width: 50px;
`;

export const DarkLine = Styled.div`
  height: 30vh;
  min-height: 200px;
  text-align: center;
  width: 100%;
  background-color: rgba(19,28,41,0.8);
  z-index: 999;
  position: relative;
  top: 50%;
  margin-top: -15vh;
  left: 0;
`;

export const MiddleLine = Styled.div`
  z-index: 999;
  position: fixed;
  padding: 30px;
  margin: 0px;
  width: 100%;
  top: 35%;
  text-align: center;
  color: rgb(0,0,0);
  background-color: rgba(255,255,255,0.8);
  box-shadow: rgba(0, 0, 0, 0.235) 0px 1px 3px;
`;

export const LoadingText = Styled.div`
  display: block;
  width: 100%;
  margin-top: 15px;
  font-size: 26px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;

export const DimScreen = Styled.div`
  /*background-color: rgba(181,182,156,0.4);*/
  background-color: rgba(170, 170, 170, 0.6);
  cursor: wait;
  /*transform: translate(-20%, -10%);*/
  z-index: 998;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;