import React from 'react'
import pizza from './assets/pizza.png'
import './App.css';
import Back from './components/back'
import { Link } from 'react-router-dom'


export default function Menu() {

    return (
       <div>
          <div className="container_order_2">
        
            <div className="container_order">
                 <img src={pizza} />
                 <div className="container_order_text_2">
                    <h1>01</h1>
                    <p>Rua Augusta</p>
                    <p><b>Ademar</b></p>
                 </div>
             </div>
          
             
             <div className="container_order">
                 <div>
                     <p>Pizza G</p>
                     <h3>Quatro Queijos</h3>
                 </div>
                 <div className="container_order_text_2">
                    <h3>Plataforma</h3>
                 </div>
             </div>
             <div className="container_order">
                 <div className="fim">
                     <p>Horario do Pedido</p>
                     <h3>17:36</h3>
                 </div>
                 <div className="fim">
                     <p>Finalização </p>
                     <h3>18:20</h3>
                 </div>
                 
             </div>
          </div>
          <div className="container_order_4">
              <Link to='/' className="inactive">
              <h1>Entregar</h1>
              </Link>
          </div>
       </div>
    )
}