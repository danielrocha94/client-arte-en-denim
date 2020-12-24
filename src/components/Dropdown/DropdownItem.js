import React from 'react';
import {DropdownMenuItem} from './style';

 const DropdownItem = (props) => {
   return (
     <DropdownMenuItem eventKey={props.key} onClick={props.onClick}>{props.children}</DropdownMenuItem>
   )
 }
 export default DropdownItem;