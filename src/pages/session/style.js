import Styled from 'styled-components';
import {device} from '../../components/themes/default/constants';

export const LoginContentWrapper = Styled.div`
  width: 1080px;
  padding-top: 56px;
  margin: 0 auto;
  justify-content: center;
  box-sizing: border-box;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const FormContainer = Styled.div`
  width: 540px;
  min-width: 540px;
  box-sizing: border-box;
  flex-direction: column;
  margin: 0;
  padding: 0;
  outline: 0;
  @media ${device.tablet} {
    width: 70%;
    min-width: 350px;
  }
`;

export const LogoContainer = Styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  padding-left: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const LoginContainer = Styled.div`
  border-radius: 4px;
  box-shadow: 0 15px 35px 0 rgba(60,66,87,.08), 0 5px 15px 0 rgba(0,0,0,.12);
  overflow: hidden;
  background-color: white;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const LoginContainerFormPadding = Styled.div`
  padding: 56px 48px;
  box-sizing: border-box;
  @media ${device.tablet} {
    padding: 15px;  
  }
`;

export const LoginContainerFormPaddingHorizontal = Styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media ${device.tablet} {
    padding: 5px;  
  }
`;

export const LoginContainerMain = Styled.div`
`;

export const LoginHeader = Styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  font-family: sohne-var,sohne-woff,Helvetica Neue,Arial,sans-serif;
  letter-spacing: -.2px;
  color: #3c4257;
`;

export const LoginFormContainer = Styled.div`
  margin-top: 20px;
  box-sizing: border-box;
`;

export const FirstRightStripe = Styled.div`
  top: 658px;
  right: -10px;
  left: calc(50% + 430px);
  height: 40px;
  background-color: #7a73ff;
  position: absolute;
`;

export const StripeBackground = Styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: -250px;
  bottom: 0;
  z-index: 0;
  transform: skewY(-12deg);
`;

export const FirstLeftStripe = Styled.div`
  top: 698px;
  left: -10px;
  right: calc(50% + 405px);
  height: 40px;
  background-color: #7a73ff;
  position: absolute;
`;

export const SecondLeftStripe = Styled.div`
  top: 668px;
  left: calc(50% - 700px);
  right: calc(50% + 540px);
  height: 40px;
  background-color: #80e9ff;
  position: absolute;
  z-index: 2;
  opacity: 0.8;
`;