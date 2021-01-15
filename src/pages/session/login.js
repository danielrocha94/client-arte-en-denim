import React from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

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

import {clientLoginRequest} from '../../actions/clientActions';

const Login = (props) => {
  const handleLogin = () => {
    props.clientLoginRequest();
    props.history.push(props.history.location.state ? props.history.location.state.from : "/clientes");
  }

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
                    <DefaultButton style={{marginTop: "12px",}} onClick={handleLogin}>
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

const mapStateToProps = state => ({
  client: state.client
})

export default connect(mapStateToProps, {clientLoginRequest})(Login);