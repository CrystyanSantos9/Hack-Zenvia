import React from 'react';
import './App.css';
import Maps from './components/maps'
import Header from './components/header'


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="containerMaps">
        <Maps className='Maps' />

        <div className='Pedidos'>
          <h4 className='title'>Pedidos</h4>
        </div>

      </div>
    </div>
  );
}

