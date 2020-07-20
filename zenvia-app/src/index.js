import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pedidos from './pedidos'
import Menu from './menu'
import Buscando from './buscando'
import { BrowserRouter,Switch,Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar

ReactDOM.render(
  <BrowserRouter>
        <Route path="/" exact={true} component={App} />
        <Route path="/pedidos" component={Pedidos} />
        <Route path="/menu" component={Menu} />
        <Route path="/buscando" component={Buscando} />
    </ BrowserRouter>
  ,document.getElementById('root')
);


