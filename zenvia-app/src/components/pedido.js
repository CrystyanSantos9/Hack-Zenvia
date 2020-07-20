import React, {useState,useEffect, createElement } from 'react'
import './header.css'
import pizza from '../assets/pizza.png'
import { Link,NavLink } from 'react-router-dom'



export default function Pedido() {

    return (
       <div>
           <NavLink to='/menu' className="inactive" activeClassName="active">
          <div className="container_order">
              
              <img src={pizza} a/>
                <div className="container_order_text" >
                    <h1>01</h1>
                    <p>Rua augusta</p>
                    <p><b>Ademar</b></p>
                </div>
            
          </div>
          </NavLink>
          <div className="container_order">
              <img src={pizza} a/>
                <div className="container_order_text" >
                    <h1>02</h1>
                    <p>Rua augusta, 215</p>
                    <p><b>Andreia</b></p>
                </div>
          </div>
          <div className="container_order">
              <img src={pizza} a/>
                <div className="container_order_text" >
                    <h1>03</h1>
                    <p>Rua Bernarndo Coelho, 115</p>
                    <p><b>Rafael</b></p>
                </div>
          </div>
       </div>
    )
}