import React, {useState} from 'react';
import {Td,ShowMore} from './style';

const Datum = (props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Td colSpan={props.colSpan || 1}>
      {
        props.showMore &&
        props.children.length > parseInt(props.showMore) ?
        <div>
          {showMore ? 
          props.children :
          props.children.substring(0, props.showMore)+"..."}
          <ShowMore onClick={() => {setShowMore(!showMore)}}>Leer {showMore ? "Menos" : "Más"}...</ShowMore>
        </div> : 
        props.children
      }
    </Td>
  )
}

export default Datum;