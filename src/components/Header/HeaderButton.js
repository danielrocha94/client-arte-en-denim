import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {toggleRightSidebarOpen} from '../../actions/rightSideBarActions';
import {toggleLeftSidebarOpen} from '../../actions/leftSideBarActions';
import {logoutUserRequest} from '../../actions/userActions';

import {HeaderBtnLi, HeaderBtnA, HeaderBtnFa } from './style';
import {DropdownButton} from '../Button';
import {DropdownItem, DropdownDivider, DropdownMenu, DropdownNotificationItem} from '../Dropdown';

class HeaderButton extends React.Component {
  constructor() {
    super();
    this.renderSelectedMenu = this.renderSelectedMenu.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirectTo = this.redirectTo.bind(this);
  }

  handleLogout() {
    this.props.logoutUserRequest();
  }

  redirectTo() {
    return window.location.replace(this.props.to)
  }

  renderSelectedMenu(buttonType) {
    typeof buttonType === "string" && ( buttonType = buttonType.toLowerCase())
    switch(buttonType) {
      case 'profile':
        return (
          <DropdownButton title="Profile" icon={this.props.icon}> 
            <DropdownMenu>
              <DropdownItem key="1">Profile</DropdownItem>
              <DropdownItem key="2">Calendar</DropdownItem>
              <DropdownItem key="3">Messages</DropdownItem>
              <DropdownDivider/>
              <DropdownItem key="4">Account Settings</DropdownItem>
              <DropdownItem key="5" onClick={this.handleLogout}>Log Out</DropdownItem>
            </DropdownMenu>
          </DropdownButton>
        );
      case 'notifications':
        return(
          <DropdownButton title="Notifications" icon={this.props.icon}> 
            <DropdownMenu size="medium">
              <DropdownNotificationItem key="1" type="mention">John Doe mentioned you in a post "Update v1.5"</DropdownNotificationItem>
              <DropdownNotificationItem key="2" type="alert">This is an alert! this should be important to you</DropdownNotificationItem>
              <DropdownNotificationItem key="3" type="announcement">This is an announcement!</DropdownNotificationItem>
              <DropdownNotificationItem key="4" type="bug">Error ocurred when trying to do X...</DropdownNotificationItem>
              <DropdownNotificationItem key="4" type="warning">You may want to update your information</DropdownNotificationItem>
              <DropdownNotificationItem key="5">Welcome Message</DropdownNotificationItem>
            </DropdownMenu>
          </DropdownButton> 
         )
      case 'rightsidebar':
        return (
          <HeaderBtnA onClick={this.props.toggleRightSidebarOpen}>
            <HeaderBtnFa icon={this.props.icon}/>
          </HeaderBtnA>
        )
      case 'toggleleftsidebar':
        return (
          <HeaderBtnA onClick={this.props.toggleLeftSidebarOpen}>
            <HeaderBtnFa icon={this.props.icon}/>
          </HeaderBtnA>
        )
      case 'link':
        return (
          <HeaderBtnA onClick={this.redirectTo}>
            <HeaderBtnFa icon={this.props.icon}/>
          </HeaderBtnA>
        )
      default: 
        return (
          <HeaderBtnA onClick={()=>{}}>
            <HeaderBtnFa icon={this.props.icon}/>
          </HeaderBtnA>
        );
    }
  }

  render() {
    return (
      <HeaderBtnLi>
        {
          this.renderSelectedMenu(this.props.type)
        }
      </HeaderBtnLi>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.rightSidebarReducer.isOpen,
  }
}

const mapDispatchToProps = {
  toggleRightSidebarOpen,
  logoutUserRequest,
  toggleLeftSidebarOpen,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderButton);