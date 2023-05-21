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
                        <Link to="/recipes">Receitas</Link>
                        {
                            username
                                ? <>
                                    <Link className="nav__item_button_nav" to="/dashboard">Olá {username}</Link>
                                    <button className="nav__item_button_nav" onClick={() => this.props.logoutUser()}>Sair</button>
                                </>
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
