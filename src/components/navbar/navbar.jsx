import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(props) {

    return (
        <div className='gradient'>
            <div className='navbar_app'></div>
            <nav className="nav">
            
                <a href="/" className="nav__brand">Receitas</a>
                <ul className="nav__menu">
                    <Link to="/">Home</Link>
                    <Link to="/ingredientes">Ingredientes</Link>
                    <Link to="/contacts">Contactos</Link>
                    <Link to="/login">Login</Link>
                    <li className="nav__item_button"><a href="/login" className="nav__link">Sign up</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;

