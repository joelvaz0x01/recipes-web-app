import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { withRouter } from '../../common/with-route';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            isAdmin: this.props.isAdmin
        };
    }

    render() {
        const { username, isAdmin } = this.props;
        return (
            <div className='gradient'>
                <div className='navbar_app'></div>
                <nav className="nav">
                    <Link to='/' className='nav__brand'>Receitas</Link>
                    <ul className='nav__menu'>
                        <Link to='/'>Home</Link>
                        <Link to='/recipes'>Receitas</Link>
                        {
                            isAdmin
                                ? <>
                                    <Link id='nav__item_button_nav' to='/admin'>Painel de administração</Link>
                                </>
                                : <></>
                        }
                        {
                            username
                                ? <>
                                    <button id='nav__item_button_nav' onClick={() => this.props.logoutUser()}>Sair</button>
                                </>
                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link id='nav__item_button_nav' to='/register'>Sign up</Link>
                                </>
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar);
