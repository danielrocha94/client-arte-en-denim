import React from 'react';
import {connect} from 'react-redux';
import {Page, Content, Section, SectionTag} from '../../../components/Body';
import { BasicBreadCrumb } from '../../../components/BreadCrumb';
import {faUser} from '@fortawesome/free-solid-svg-icons';

const Account = (props) => {
  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Cuenta</BasicBreadCrumb>
      <Content title="Cuenta" icon={faUser}>
        <Section title="Información General">
          <SectionTag title="Nombre">
            ANTONIO BOJALIL
          </SectionTag>
          <SectionTag title="Contacto">
            ADRIAN CABRERA
          </SectionTag>
          <SectionTag title="Email">
            macajro_14@hotmail.com
          </SectionTag>
          <SectionTag title="Id de cliente">
            A08
          </SectionTag>
          <SectionTag title="Contacto">
            ANTONIO BOJALIL
          </SectionTag>
          <SectionTag title="Ciudad">
            Puebla
          </SectionTag>
          <SectionTag title="Estado">
            Puebla
          </SectionTag>
          <SectionTag title="Telefono">
            1997724
          </SectionTag>
        </Section>

        <Section title="Estado de cuenta">
        <SectionTag title="Estado">
            Activo
          </SectionTag>
          <SectionTag title="Descripcion">
            Contado
          </SectionTag>
          <SectionTag title="Saldo">
            $ 1,345 MXN
          </SectionTag>
          <SectionTag title="Plazos">
            30 dias
          </SectionTag>
          <SectionTag title="Plazos">
            30 dias
          </SectionTag>
        </Section>
      </Content>
    </Page>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Account);