import React from 'react'
import logo from '../assets/logo.png'
import './header.css'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="footer">
            <Link to="/pedidos">
                <div className="text_footer">Voltar para Tela de Pedidos</div>
            </Link>
        </footer>
    )
}