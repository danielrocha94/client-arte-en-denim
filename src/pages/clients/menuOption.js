import React from 'react'
import {MenuOptionWrapper, DescriptionText, OptionName, OptionIcon, MenuOptionContainer} from './style';

const menuOption = (props) => {
  return (
    <MenuOptionContainer>
      <MenuOptionWrapper to={props.url}>
        <OptionIcon icon={props.icon}/>
        <OptionName>
          {props.children}
        </OptionName>
        <DescriptionText>
          {props.description}
        </DescriptionText>
      </MenuOptionWrapper>
    </MenuOptionContainer>
  )
}

export default menuOption;