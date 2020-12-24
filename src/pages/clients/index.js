import React from 'react';
import MenuOption from './menuOption'
import Menu from './menu';
import {faCog, faHistory, faShoppingCart, faUser, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';


const Clients = (props) => {
  return (
    <div>
      <div>
        Bienvenido
      </div>
      <Menu>
        <MenuOption
          icon={faUser}
          description={"Observa información relevante sobre tu cuenta"}
        >Cuenta</MenuOption>

        <MenuOption
          icon={faFileInvoiceDollar}
          description={"Administra tus transacciones y verifica tus pagos"}
        >Transacciónes</MenuOption>
        
        <MenuOption 
        icon={faShoppingCart}
        description={"Agrega, cambia, o elimina algun pedido"}
        >Ordenes</MenuOption>

        <MenuOption
          icon={faHistory}
          description={"Mira tus movimientos, operaciones y estados de cuenta anteriores"}
        >Historial</MenuOption>

        <MenuOption
        icon={faCog}
        description={"Actualiza la información sobre tu cuenta"}
        >Configuración</MenuOption>

      </Menu>
    </div>
  )
}

export default Clients;