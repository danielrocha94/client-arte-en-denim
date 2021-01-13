import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {BasicBreadCrumb} from '../../../components/BreadCrumb';
import {
  Page,
  Content, 
  Section
} from '../../../components/Body';
import {Tab, TabGroup} from '../../../components/Navs';
import {
  fetchClientBalances,
  fetchClientPayments
} from '../../../actions/clientActions';
import {faFileInvoiceDollar, faCheck, faExclamationTriangle, faTimes} from '@fortawesome/free-solid-svg-icons';

import PaymentRows from './paymentRows';
import BalanceRows from './balanceRows';

const Payments = (props) => {
  const [selectedTab, setSelectedTab] = useState("pagos");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let client = {Cliente: "A08"}
    props.fetchClientPayments(client);
    props.fetchClientBalances(client);
  }, []);

  useEffect(() => {
    if(props.payments.count) {
      setIsLoading(false);
    }
  }, [props.payments])

  return (
    <Page style={{background: "#EEEEEE"}}>
      <BasicBreadCrumb>Pagos</BasicBreadCrumb>
      <Content title="Pagos" icon={faFileInvoiceDollar}>
        <Section hideHeader>
          <TabGroup>
            <Tab 
              id="pagos" 
              onClick={setSelectedTab}
              active={selectedTab}>Pagos</Tab>
            <Tab 
              id="saldos" 
              onClick={setSelectedTab}
              active={selectedTab}>Saldos</Tab>
            <Tab 
              id="no-capturado" 
              onClick={setSelectedTab}
              active={selectedTab}>No capturados</Tab>
            <Tab 
              id="todos" 
              onClick={setSelectedTab}
              active={selectedTab}>Todos</Tab>
          </TabGroup>
          { isLoading ?
            <>Cargando...</> :
            <>
              {selectedTab === "pagos" && <PaymentRows payments={props.payments}/>}
              {selectedTab === "saldos" && <BalanceRows balances={props.balances}/>}
            </>
          }
          </Section>
      </Content>
    </Page>
  )
}

const mapStateToProps = state => ({
  payments: state.client.payments,
  balances: state.client.balances,
})

const mapDispatchToProps = {
  fetchClientPayments,
  fetchClientBalances
}



export default connect(mapStateToProps, mapDispatchToProps)(Payments);