import React, {useState, useEffect, useRef} from 'react';
import {DropdownBtn, DropdownBtnIcon} from './style.js';

const DropdownButton = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function doShow() {
    if (isOpen) {
      return (
        props.children
      )
    } else {
      return <></>
    }
  }

  return (
    <DropdownBtn 
      title={props.title} 
      variant={props.variant && props.variant.toLowerCase()}
      onClick={() => setIsOpen(!isOpen)}
      show={isOpen}
      ref={wrapperRef}
      size={props.size}
    >
      <DropdownBtnIcon icon={props.icon}/>
      {doShow()}
    </DropdownBtn>
  )
}

export default DropdownButton;