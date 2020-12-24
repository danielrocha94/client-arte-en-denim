import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Clients from './pages/clients';

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/clientes" component={Clients}/>
        <Route exact path="/clientes/cuenta" component={Clients}/>
        <Route exact path="/clientes/historial" component={Clients}/>
        <Route exact path="/clientes/ordenes" component={Clients}/>
        <Route exact path="/clientes/transacciones" component={Clients}/>
      </Switch>
    </Router>
  )
}

export default Routes;