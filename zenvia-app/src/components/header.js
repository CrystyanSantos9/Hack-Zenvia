import React from 'react'
import logo from '../assets/logo.png'
import './header.css'


export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt='logo' className="logo"/>
        </header>
    )
}