import {Page, Content} from '../../../components/Body';
import {BasicBreadCrumb} from '../../../components/BreadCrumb';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Configuration = (props) => {
  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Configuración</BasicBreadCrumb>
      <Content title="Configuración" icon={faCog}>
        Profile
      </Content>
    </Page>
  )
}

export default Configuration;