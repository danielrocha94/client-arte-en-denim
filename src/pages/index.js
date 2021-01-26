import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const IndexPage = (props) => {

  useEffect(() => {
    props.history.push("/login");
  }, [])
  
  return (
    <div>

    </div>
  )
}

export default IndexPage;