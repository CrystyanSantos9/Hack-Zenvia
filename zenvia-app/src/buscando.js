import React from 'react';
import './App.css';
import Maps from './components/maps'
import Header from './components/header'
import Footer from './components/footer'


export default function Buscando() {
  return (
    <div className="App">
      <Header></Header>
        <div className="busca">
            <h1>Buscando</h1>
        </div>  
    
      <Footer />
    </div>
  );
}

