import {
  Page,
  Content, 
  Section, 
  SectionTag, 
  SectionFooter
} from '../../../components/Body';
import {BasicBreadCrumb} from '../../../components/BreadCrumb';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Configuration = (props) => {
  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Configuración</BasicBreadCrumb>
      <Content title="Configuración" icon={faCog}>
        <Section title="Perfil">
        <SectionTag title="Nombre">
            Unique Brother
          </SectionTag>
          <SectionTag title="Email">
            admin@uniquebrother.com
          </SectionTag>
          <SectionTag title="Cliente ID">
            12345678abc
          </SectionTag>
          <SectionFooter>
            Información del perfil | Configuración del perfil
          </SectionFooter>
        </Section>

        <Section title="Preferencias">
          <SectionTag title="Opciones">
            Unique Brother
          </SectionTag>
          <SectionTag title="Direccion">
            admin@uniquebrother.com
          </SectionTag>
          <SectionTag title="Nuevos productos">
            12345678abc
          </SectionTag>
        </Section>
      </Content>
    </Page>
  )
}

export default Configuration;