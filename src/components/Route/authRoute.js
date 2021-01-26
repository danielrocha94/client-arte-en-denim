import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {clientTokenLoginRequest} from '../../actions/clientActions';
import {createFlashMessageRequest} from '../../actions/alertActions';

const AuthRoute = ({component: Component, ...rest}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem('auth-token');
    if(token) {
      rest.clientTokenLoginRequest()
    } else {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    if(rest.client.isAuthenticated) {
      setIsLoading(false);
    }
  }, [rest.client])

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Route {...rest} 
      render={
        (props) => {
          if(rest.client.isAuthenticated) {
            return <Component {...props}/>
          } else {
            rest.createFlashMessageRequest({
              closeTime: 7000,
              variant: "danger",
              message: "Necesitas iniciar sesión para poder acceder a esta pagina"
            })
            return <Redirect to={{
              pathname: '/login'
            }}/>
          }
        }
      }
    />
  )
}

const mapStateToProps = state => ({
  client: state.client,
})

export default connect(mapStateToProps, {clientTokenLoginRequest, createFlashMessageRequest})(AuthRoute);