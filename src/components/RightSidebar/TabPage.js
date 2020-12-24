import React from 'react';
import {TabPanel, TabTitle} from './style';
import {SettingToggle} from '.'

const TabPage = (props) => {
  return (
    <TabPanel>
      {props.children}
    </TabPanel>
  )
}

export default TabPage;