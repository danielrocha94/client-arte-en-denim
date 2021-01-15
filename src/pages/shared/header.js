import { faPray } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {connect} from 'react-redux';
import {DefaultHeader} from '../../components/Header';
import {clientLogoutRequest} from '../../actions/clientActions';

const Header = (props) => {
  return (
    <DefaultHeader
      isAuthenticated={props.client.isAuthenticated}
      onLogout={props.clientLogoutRequest}
    >
    </DefaultHeader>
  )
}

const mapStateToProps = state => ({
  client: state.client
})

export default connect(mapStateToProps, {clientLogoutRequest})(Header);