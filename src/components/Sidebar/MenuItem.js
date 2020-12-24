import React from 'react';
import { LiItem, Anchor, ItemIcon, AngleIcon, SpanText, SubmenuAnchor } from './style.js';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MenuItem = (props) => {
  const redirectTo = () => {
    return window.location.replace(props.link)
  }

  return (
    <div>
      <LiItem onClick={props.showMenu}>
        <Anchor active={(props.openMenuText === props.text)}>
          <ItemIcon icon={props.icon} isSelected={props.openMenuText === props.text} selectedColor={props.selectedColor}/>
          { props.link ?
            (
              props.isExternal ?
                <SpanText onClick={redirectTo}>
                  <SubmenuAnchor>
                    {props.text}
                  </SubmenuAnchor>
                </SpanText>:
                <SpanText>
                  <SubmenuAnchor
                    to={props.link}
                  >
                    {props.text}
                  </SubmenuAnchor>
                </SpanText>
            ) :
            <SpanText>{props.text}</SpanText>
          }
          {props.children && 
            ( props.openMenuText === props.text ?
                <AngleIcon icon={faAngleDown}/> :
                <AngleIcon icon={faAngleLeft}/>
            )
          }
        </Anchor>
      </LiItem>
      { props.isMenuOpen && props.openMenuText === props.text &&
        <ul ref={props.dropdownMenuRef}>
          {props.children}
        </ul>
      }
    </div>
  )
};
 
export default MenuItem;