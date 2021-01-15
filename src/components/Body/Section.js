import React, {useState} from 'react';
import {SectionWrapper, SectionHeader, HeaderIconContainer, SectionHeaderTitle, HeaderCarat, SectionContainer} from './style';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Section = (props) => {
  const [isOpen, setIsOpen] = useState(false);
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
        {isOpen ? 
          props.children :
          props.children.slice(0,3)
        }
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section;