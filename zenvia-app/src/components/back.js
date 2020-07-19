import React from 'react'
import logo from '../assets/btn_voltar.png'


export default function Back() {
    return (
        <nav className="btn_back">
            <img src={logo} alt='Voltar'/>
        </nav>
    )
}