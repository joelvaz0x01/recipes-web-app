import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

class Navbar extends Component {

    render() {
        const { username } = this.props;
        return (
            <div className='gradient'>
                <div className='navbar_app'></div>
                <nav className="nav">
                    <Link to="/" className="nav__brand">Receitas</Link>
                    <ul className="nav__menu">
                        <Link to="/">Home</Link>
                        <Link to="/receitas">Receitas</Link>
                        {
                            this.props.username
                                ? <Link className="nav__item_button_nav" to="/perfil">Olá {this.props.username}</Link>
                                : <>
                                    <Link to="/login">Login</Link>
                                    <Link className="nav__item_button_sign" to="/register">Sign up</Link>
                                </>
                        }


                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;
