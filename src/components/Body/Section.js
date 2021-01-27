import React, {useState} from 'react';
import {SectionWrapper, SectionHeader, HeaderIconContainer, SectionHeaderTitle, HeaderCarat, SectionContainer} from './style';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Section = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SectionWrapper onClick={()=>setIsOpen(!isOpen)}>
      { !props.hideHeader &&
        <SectionHeader>
          {props.title &&
            <SectionHeaderTitle>
              {props.title}
            </SectionHeaderTitle>
          }
          <HeaderIconContainer>
            <HeaderCarat icon={isOpen ? faAngleUp : faAngleDown}/>
          </HeaderIconContainer>
        </SectionHeader>
      }
      <SectionContainer>
        {props.children && !(props.children.length > 2) &&
          props.children
        }
        {props.children && props.children.length > 2 && (isOpen ? 
          props.children :
          props.children.slice(0,3))
        }
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section;