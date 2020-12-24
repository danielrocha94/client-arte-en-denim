import React from 'react';
import {SettingToggleItemContainer, SettingToggleItemName, SettingToggleSwitch} from './style';

const SettingToggle = (props) => {

  return (
    <SettingToggleItemContainer >
      <SettingToggleItemName>{props.children}</SettingToggleItemName>
      <span onClick={props.onClick && (() => {return props.onClick(props.children)}) }>
        <SettingToggleSwitch
          className="disabled"
          options={
            {
              color: 'rgb(88, 147, 223)',
              size: 'small',
              float: 'right',
              disabledOpacity : 0.5
            }
          }  
          checked={props.checked}
          disabled={props.disabled}
        />
      </span>
    </SettingToggleItemContainer>
  )
}

export default SettingToggle;