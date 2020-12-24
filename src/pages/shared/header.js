import React from 'react';
// import {connect} from 'react-redux';
import {DefaultHeader} from '../../components/Header';

const Header = (props) => {
  return (
    <DefaultHeader>
      Arte en Denim
    </DefaultHeader>
  )
}

// const mapStateToProps = state => ({
//   user: state.user
// })

export default Header;
// export default connect(mapStateToProps, {})(Header);