import React from 'react';
import {Page} from '../../components/Body';
import {
  LoginContentWrapper,
   FormContainer, 
   LogoContainer, 
   LoginContainerFormPadding,
   LoginContainerFormPaddingHorizontal,
   LoginContainerMain,
   LoginHeader,
   LoginContainer,
   LoginFormContainer,
   FirstRightStripe,
   StripeBackground,
   FirstLeftStripe,
   SecondLeftStripe
  } from './style';

import {BasicInput} from '../../components/Form/';
import {DefaultButton} from '../../components/Button';

const Login = (props) => {
  return (
    <Page style={{}}>
      <StripeBackground>
        <SecondLeftStripe/>
        <FirstLeftStripe/>
        <FirstRightStripe/>
      </StripeBackground>
      <LoginContentWrapper>
        <FormContainer>
          <LogoContainer>
            ADN
          </LogoContainer>
          <LoginContainer>
            <LoginContainerFormPadding>
              <LoginContainerFormPaddingHorizontal>
                <LoginContainerMain>
                  <LoginHeader>
                    Inicia sesión en tu cuenta
                  </LoginHeader>
                  <LoginFormContainer>
                    <BasicInput
                      title="Correo electrónico"
                    />
                    <BasicInput
                      title="Contraseña"
                      type="password"
                    />
                    <DefaultButton style={{marginTop: "12px",}}>
                      Continuar
                    </DefaultButton>
                  </LoginFormContainer>
                </LoginContainerMain>
              </LoginContainerFormPaddingHorizontal>
            </LoginContainerFormPadding>
          </LoginContainer>
        </FormContainer>
      </LoginContentWrapper>
    </Page>
  )
} 

export default Login;