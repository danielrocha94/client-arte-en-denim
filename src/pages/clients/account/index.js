import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Page, Content, Section, SectionTag} from '../../../components/Body';
import { BasicBreadCrumb } from '../../../components/BreadCrumb';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {clientAccountInfo} from '../../../actions/clientActions';

const Account = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    props.clientAccountInfo({CustId: "A08"});
  }, [])

  useEffect(() => {
    if(props.client.data.CustId) {
      setIsLoading(false);
      setAccountInfo(props.client.data);
    }
  }, [props.client])
  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Cuenta</BasicBreadCrumb>
      <Content title="Cuenta" icon={faUser}>
        {isLoading ? <div>Cargando...</div> :
          <>
            <Section title="Información General">
              <SectionTag title="Nombre">
                {accountInfo.Name}
              </SectionTag>
              <SectionTag title="Contacto">
                {accountInfo.Contacto}
              </SectionTag>
              <SectionTag title="Email">
                {accountInfo.Email}
              </SectionTag>
              <SectionTag title="Id de cliente">
                {accountInfo.CustId}
              </SectionTag>
              <SectionTag title="Ciudad">
                {accountInfo.Ciudad}
              </SectionTag>
              <SectionTag title="Estado">
                {accountInfo.Estado}
              </SectionTag>
              <SectionTag title="Telefono">
               {accountInfo.Telefono}
              </SectionTag>
            </Section>

            <Section title="Estado de cuenta">
              <SectionTag title="Estado">
                {accountInfo.Status === "A" ? "Activo" : "Inactivo"}
              </SectionTag>
              <SectionTag title="Descripcion">
                {accountInfo.Descr}
              </SectionTag>
              <SectionTag title="Saldo">
                $ {accountInfo.Saldo} MXN
              </SectionTag>
              <SectionTag title="Plazos">
                {accountInfo.DueIntrv} dias
              </SectionTag>
            </Section>
          </>
        }
      </Content>
    </Page>
  )
}

const mapStateToProps = state => ({
  client: state.client,
});

const mapDispatchToProps = {
  clientAccountInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);