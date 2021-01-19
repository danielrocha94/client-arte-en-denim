import React, {useState, useEffect} from 'react';
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
   SecondLeftStripe,
   ErrorMsgLi
  } from './style';

import {BasicInput} from '../../components/Form/';
import {DefaultButton} from '../../components/Button';
import {FormFlashMessage} from '../../components/Alert';

import {clientLoginRequest} from '../../actions/clientActions';

const Login = (props) => {

  const [credentials, setCredentials] = useState({email: "", password: ""});
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if(!!props.client.error && !props.client.isAuthenticated) {
      setErrorMessage(props.client.error);
    } else if(props.client.isAuthenticated) {
      props.history.push(props.history.location.state ? props.history.location.state.from : "/clientes");
      //sign in alert;
    }
  }, [props.client])
  
  const handleLogin = () => {
    props.clientLoginRequest(credentials)
  }

  const handleInputChange = (e) => {
   let val = e.target.value;
   let name = e.target.name;
   setCredentials({...credentials, [name]: val});
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
                {!!errorMessage && 
                  <FormFlashMessage 
                    variant={"danger"} 
                    onClose={() => {setErrorMessage(null)}}>
                      {errorMessage}
                    </FormFlashMessage>}
                <LoginContainerMain>
                  <LoginHeader>
                    Inicia sesión en tu cuenta
                  </LoginHeader>
                  <LoginFormContainer>
                    <BasicInput
                      title="Correo electrónico"
                      name={"email"}
                      value={credentials.email}
                      onChange={handleInputChange}
                    />
                    <BasicInput
                      title="Contraseña"
                      name={"password"}
                      type="password"
                      onChange={handleInputChange}
                      value={credentials.password}
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