import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <h3>Menu de Navegação</h3>
            <Link to='/'>Início</Link>
            <Link to='/signup'>Cadastre-se</Link>
            <Link to='/clients'>Clientes</Link>
        </nav>       
    )
}