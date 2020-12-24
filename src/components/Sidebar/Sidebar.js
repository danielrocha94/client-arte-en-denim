import React, { Component } from 'react';
import {PageSidebar, LogoBox, SidebarContent, AccordionMenu} from './style';
// import UniqueLogo from '../../assets/images/Uniquelogo.png';

class Sidebar extends Component {
  constructor() {
    super();
    this.redirectTo = this.redirectTo.bind(this);
  }

  redirectTo() {
    // return window.location.replace( process.env.REACT_APP_API_BASE_URL+'/en');
  }

  render() {
    return (
      <PageSidebar {...this.props}>
        {this.props.title && 
          <LogoBox onClick={this.redirectTo}>
            {/* <img src={UniqueLogo} height="20" width="20" alt="logo" style={{marginBottom: '5px', marginRight: '2px'}}/> */}
            {this.props.title}
          </LogoBox>
        }
        <SidebarContent>
          <AccordionMenu ref={this.props.menuContainerRef}>
            {this.props.children}
          </AccordionMenu>
        </SidebarContent>
      </PageSidebar>
    );
  }
}

export default Sidebar;