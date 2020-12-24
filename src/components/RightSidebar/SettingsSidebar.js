import React, { Component } from 'react';
import {
  PageRightSidebar,
} from './style'

class SettingsSidebar extends Component {
  constructor() {
    super();
  }


  render() {

    return (
      this.props.isOpen ?
      <PageRightSidebar>
        {this.props.children}
      </PageRightSidebar>
      : <></>
    )
  }
}

export default SettingsSidebar;