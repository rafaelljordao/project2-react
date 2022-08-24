import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h3>Título da Navbar</h3>
            <Link className="link" to='/'>Início</Link>
            <Link className="link" to='/signup'>Cadastre-se</Link>
            <Link className="link" to='/clients'>Clientes</Link>
        </nav>       
    )
}