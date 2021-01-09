import React, {useState} from 'react';
import {BasicBreadCrumb} from '../../../components/BreadCrumb';
import {
  Page,
  Content, 
  Section
} from '../../../components/Body';
import {DataTable, DataTbody, DataThead, Header, Row, Datum, ColoredDatum} from '../../../components/Table';
import {Tab, TabGroup} from '../../../components/Navs';
import {faFileInvoiceDollar, faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';

const Payments = (props) => {
  const [selectedTab, setSelectedTab] = useState("exitosos");
  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Pagos</BasicBreadCrumb>
      <Content title="Pagos" icon={faFileInvoiceDollar}>
        <Section hideHeader>
          <TabGroup>
            <Tab 
              id="exitosos" 
              onClick={setSelectedTab}
              active={selectedTab}>Exitosos</Tab>
            <Tab 
              id="rembolso" 
              onClick={setSelectedTab}
              active={selectedTab}>Rembolsados</Tab>
            <Tab 
              id="no-capturado" 
              onClick={setSelectedTab}
              active={selectedTab}>No capturados</Tab>
            <Tab 
              id="todos" 
              onClick={setSelectedTab}
              active={selectedTab}>Todos</Tab>
          </TabGroup>
          <DataTable>
            <DataThead>
              <Header>Importe</Header>
              <Header>Estado</Header>
              <Header>Descripcion</Header>
              <Header>Fecha</Header>
            </DataThead>
            <DataTbody>
              <Row>
                <Datum>638,00 MXN</Datum>
                <Datum><ColoredDatum variant="success" icon={faCheck}>Exitoso</ColoredDatum></Datum>
                <Datum>Numero de Orden: R773403851-PBFVRN02</Datum>
                <Datum>6 ene. 14:08</Datum>
              </Row>
              <Row>
                <Datum>638,00 MXN</Datum>
                <Datum><ColoredDatum variant="warning" icon={faExclamationTriangle}>Pendiente</ColoredDatum></Datum>
                <Datum>Numero de Orden: R773403851-PBFVRN02</Datum>
                <Datum>6 ene. 14:08</Datum>
              </Row>
              <Row>
                <Datum>638,00 MXN</Datum>
                <Datum><ColoredDatum variant="danger" icon={faTimes}>Cancelado</ColoredDatum></Datum>
                <Datum>Numero de Orden: R773403851-PBFVRN02</Datum>
                <Datum>6 ene. 14:08</Datum>
              </Row>
            </DataTbody>
          </DataTable>
          <b>1</b> resultado
        </Section>
      </Content>
    </Page>
  )
}

export default Payments;