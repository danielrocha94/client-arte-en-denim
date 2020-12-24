import React from 'react';
// import { Breadcrumb } from 'react-bootstrap';
import {BreadcrumbContainer} from './style';

const BasicBreadCrumb = (props) => {
  return (
    <BreadcrumbContainer>
      {props.children}
    </BreadcrumbContainer>
  )
}

export default BasicBreadCrumb;