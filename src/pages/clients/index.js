import React from 'react';
import MenuOption from './menuOption'
import Menu from './menu';
import {Page} from '../../components/Body';
import {BasicBreadCrumb} from '../../components/BreadCrumb';
import {faCog, faHistory, faShoppingCart, faUser, faFileInvoiceDollar, faCreditCard} from '@fortawesome/free-solid-svg-icons';


const Clients = (props) => {
  return (
    <Page>
      <BasicBreadCrumb>Panel de Control</BasicBreadCrumb>
      <Menu>
        <MenuOption
          icon={faUser}
          description={"Observa información relevante sobre tu cuenta"}
          url="/clientes/cuenta"
        >Cuenta</MenuOption>

        <MenuOption
          icon={faFileInvoiceDollar}
          description={"Administra y verifica tus pagos, cobranza y saldos"}
          url="/clientes/pagos"
        >Pagos</MenuOption>
        
        <MenuOption 
        icon={faShoppingCart}
        description={"Agrega, cambia, o elimina algun pedido"}
        >Ordenes</MenuOption>

        <MenuOption 
        icon={faCreditCard}
        description={"Administra tu linea de credito, tu deuda actual y saldo restante"}
        >Linea de credito</MenuOption>

        <MenuOption
          icon={faHistory}
          description={"Mira tus movimientos, operaciones y estados de cuenta anteriores"}
        >Historial</MenuOption>

        <MenuOption
        icon={faCog}
        description={"Actualiza la información sobre tu cuenta"}
        url="/clientes/configurar"
        >Configuración</MenuOption>

      </Menu>
    </Page>
  )
}

export default Clients;