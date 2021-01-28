import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {BasicBreadCrumb} from '../../../components/BreadCrumb';
import {
  Page,
  Content, 
  Section
} from '../../../components/Body';
import {Tab, TabGroup} from '../../../components/Navs';
import {AddFilter} from '../../../components/Filter';
import {
  fetchClientBalances,
  fetchAllClientBalances,
  fetchClientPayments,
  fetchAllClientPayments,
} from '../../../actions/clientActions';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';
import {filterRows} from '../../../utils/actions/filters';

import PaymentRows from './paymentRows';
import BalanceRows from './balanceRows';

const Payments = (props) => {
  const [selectedTab, setSelectedTab] = useState("pagos");
  const [isLoading, setIsLoading] = useState(true);
  //lets load filters from api
  const [filterList, setFilterList] = useState([
    {col: 'CuryOrigDocAmt', name: 'Importe', data: "number", type: "equals"},
    {col: 'Cuenta', name: 'Cuenta', data: "text", type: "starts_with"},
    {col: 'DocDate', name: 'Fecha de Documento', data: "date", type: "after"},
    {col: 'invcNbr', name: 'Descripción', data: "text", type: "contains"},
  ]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredRows, setFilteredRows] = useState(false);

  const handleFilterDelete = (filter) => {
    let newActiveFilers = activeFilters.filter(active => filter.name !== active.name);
    setActiveFilters(newActiveFilers);
  }

  const handleFilterAdd = (filter) => {
    setActiveFilters([...activeFilters, filter]);
  }

  const handleClearFilters = () => {
    setActiveFilters([])
  }

  useEffect(()=> {
    if(!activeFilters.length) {
      setFilteredRows(false);
      return
    }

    setIsLoading(true);
    let rows = selectedTab === "pagos" ? props.payments : props.balances;
    let processedRows = filterRows(rows, activeFilters);
    setFilteredRows(processedRows);
    setIsLoading(false);
  }, [activeFilters])

  useEffect(() => {
    if(props.client.isAdmin) {
      props.fetchAllClientPayments();
      props.fetchAllClientBalances();
    } else if (props.client.isAuthenticated) {
      props.fetchClientPayments({Cliente: props.client.user.client_id});
      props.fetchClientBalances({Cliente: props.client.user.client_id});
    }
  }, [props.client.user]);

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
          <AddFilter
            filterList={filterList}
            activeFilters={activeFilters}
            onDelete={handleFilterDelete}
            onClear={handleClearFilters}
            onCreate={handleFilterAdd}
            onUpdate={()=>{}}
          />
        </Section>
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
              {selectedTab === "pagos" && <PaymentRows payments={filteredRows || props.payments}/>}
              {selectedTab === "saldos" && <BalanceRows balances={filteredRows || props.balances}/>}
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
  client: state.client,
})

const mapDispatchToProps = {
  fetchClientPayments,
  fetchClientBalances,
  fetchAllClientBalances,
  fetchAllClientPayments,
}



export default connect(mapStateToProps, mapDispatchToProps)(Payments);