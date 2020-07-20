import React from 'react';
import './App.css';
import Header from './components/header'
import Back from './components/back'
import { Link, NavLink } from 'react-router-dom'
import Pedido from './components/pedido'


export default function Pedidos() {
  return (
    <div className="App">
      <Header></Header>
     <NavLink to="/">
      <Back></Back>
      </NavLink>
        <session className="display_orders">
           <Pedido />
        </session>
    </div>
  );
}

