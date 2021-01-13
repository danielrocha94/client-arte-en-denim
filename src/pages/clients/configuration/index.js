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
          ANTONIO BOJALIL
          </SectionTag>
          <SectionTag title="Email">
            usuario@ejemplo.com
          </SectionTag>
          <SectionTag title="Cliente ID">
            A08
          </SectionTag>
          <SectionFooter>
            Información del perfil | Configuración del perfil
          </SectionFooter>
        </Section>

        <Section title="Preferencias">
          <SectionTag title="Ciudad">
            Puebla
          </SectionTag>
          <SectionTag title="Descripcion">
            Contado
          </SectionTag>
          <SectionTag title="Saldo">
            28971.44
          </SectionTag>
        </Section>
      </Content>
    </Page>
  )
}

export default Configuration;