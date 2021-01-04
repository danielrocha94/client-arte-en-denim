import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import defaultTheme from './components/themes/default';
import Header from './pages/shared/header';

import Clients from './pages/clients';
import Configuration from './pages/clients/configuration';

const Routes = (props) => {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <div style={{
          display: "flex",
          flexDirection: "column", 
          position: "absolute", 
          left: 0, 
          top: 0, 
          overflow: "hidden", 
          zIndex: 1,
          bottom: "auto",
          right: "auto",
          width: "100%", 
          height: "100%"}}>
          <Header/>
          <Switch>
            <Route exact path="/clientes" component={Clients}/>
            <Route exact path="/clientes/cuenta" component={Clients}/>
            <Route exact path="/clientes/historial" component={Clients}/>
            <Route exact path="/clientes/ordenes" component={Clients}/>
            <Route exact path="/clientes/transacciones" component={Clients}/>
            <Route exact path="/clientes/configurar" component={Configuration}/>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default Routes;