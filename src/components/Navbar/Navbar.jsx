import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import UsersDataService from "../../services/users.service";
import { withRouter } from '../../common/with-route';

class Navbar extends Component {

    // Verificar se necessário
    isAdmin = () => {
        var data = {
            username: this.state.username
        };

        UsersDataService.isAdmin(data)
            .then(response => {
                this.setState({
                    isAdmin: response.data.isAdmin
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        const { username, isAdmin } = this.props;
        return (
            <div className='gradient'>
                <div className='navbar_app'></div>
                <nav className="nav">
                    <Link to="/" className="nav__brand">Receitas</Link>
                    <ul className="nav__menu">
                        <Link to="/">Home</Link>
                        <Link to="/recipes">Receitas</Link>
                        {
                            isAdmin
                                ? <>
                                    <Link className="nav__item_button_nav" to="/admin">Olá {username}</Link>
                                </>
                                : <></>
                        }
                        {
                            username
                                ? <>
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
export default withRouter(Navbar);
