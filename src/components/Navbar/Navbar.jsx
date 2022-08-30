import React from "react"
import { Link } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <h3 className="titleNavbar">Título da Navbar</h3> */}
            <div className="divNavbar">
                <Link className="link" to='/'>início</Link>
                <Link className="link" to='/signup'>cadastre-se</Link>
                <Link className="link" to='/clients'>clientes</Link>
            </div>
        </nav>       
    )
}