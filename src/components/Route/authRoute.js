import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const AuthRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} 
      render={
        (props) => {
          if(rest.user.isAuthenticated) {
            return <Component {...props}/>
          } else {
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
  user: state.user,
})

export default connect(mapStateToProps, {})(AuthRoute);