import React from "react"
import { Link } from "react-router-dom"
import './css/navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h3>Título da Navbar</h3>
            <Link to='/'>Início</Link>
            <Link to='/signup'>Cadastre-se</Link>
            <Link to='/clients'>Clientes</Link>
        </nav>       
    )
}