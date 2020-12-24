import React, {useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createFlashMessageRequest} from '../../actions/alertActions';
import {loginUserWithExistingToken, renewUserTokenRequest} from '../../actions/userActions';

const ProtectedRoute = ({component: Component, ...props}) => {
  const [tokenVerified, setTokenVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionStorageItems, setSessionStorageItems] = useState(JSON.parse(sessionStorage.getItem('sessionToken')));

  useEffect(() => {
    if(!!sessionStorageItems && !props.user.isLoggedIn){
      if (storageItemsValid()) {
        props.loginUserWithExistingToken(sessionStorageItems)
        .then(res => {
          let isVerified = !(res && res.error && res.error.status === 401)
          setTokenVerified(isVerified);
          setIsLoading(false);
        })
      } else {
        props.renewUserTokenRequest()
        .then((res) => {
          setTokenVerified(res.status === 200);
          setIsLoading(false);
        })
      }
    } else {
      setIsLoading(false);
    }
  }, [tokenVerified])

  const storageItemsValid = () => {
    let timeNow = Math.floor(Date.now() / 1000);
    return timeNow - sessionStorageItems.created_at < sessionStorageItems.expires_in
  }

  if(isLoading) {
    return (
      <div>LOADING</div>
    )
  }
  
  return (
    <Route {...props} render={
      () => {
        if((props.user && props.user.isLoggedIn && props.user.data) || tokenVerified) {
          if(props.only && props.only.indexOf(props.user.data.attributes.role) < 0 ){
            props.createFlashMessageRequest({
              closeTime: 7000,
              variant: "danger",
              message: "No tienes los permisos para acceder a esta pagina"
            })

            return <Redirect to={
              {
                pathname: "/",
                state: {
                  from: props.location
                }
              }
            }/> 
          }
          return <Component {...props} />
        } else if(!!sessionStorageItems && !tokenVerified) {
          setSessionStorageItems([])
          return <Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          }/>
        } else {
          props.createFlashMessageRequest({
            closeTime: 7000,
            variant: "danger",
            message: "Necesitas iniciar sesión para poder acceder a esta pagina"
          })
          return <Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          }/>
        }
      }
    }/>
  )
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps, {createFlashMessageRequest, loginUserWithExistingToken, renewUserTokenRequest})(ProtectedRoute);