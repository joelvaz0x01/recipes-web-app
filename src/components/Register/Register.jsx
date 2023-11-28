import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import fish from '../../assets/images/fish.png';
import './register.css'
import UsersDataService from '../../services/users.service';
import { withRouter } from '../../common/with-route';

class Register extends Component {
    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);

        this.state = {
            email: this.props.email,
            password: '',
            username: this.props.username,
            success: false,
        };
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    onChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    onChangeName = (event) => {
        this.setState({ username: event.target.value });
    };

    registerUser = () => {
        var data = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        };

        UsersDataService.register(data)
            .then(response => {
                this.setState({ success: true });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        const { email, password, username, success } = this.state;
        if (success) {
            return <Navigate to='/login' replace={true} />
        } else {
            return (
                <div className='background'>
                    <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center' style={{ backgroundColor: '#DCCA87' }}>
                        <main className='pa4 black-80'>
                            <div className='measure'>
                                <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                                    <legend className='f1 fw6 ph0 mh0'>Registo</legend>
                                    <div className='mt3'>
                                        <label className='db fw6 lh-copy f9' htmlFor='name'>Nome:</label>
                                        <input
                                            className='pa2 input-reset ba bg-transparent w-100'
                                            type='text'
                                            name='name'
                                            value={username}
                                            id='name'
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className='mt3'>
                                        <label className='db fw6 lh-copy f9' htmlFor='email-address'>Email:</label>
                                        <input
                                            className='pa2 input-reset ba bg-transparent w-100'
                                            type='email'
                                            name='email-address'
                                            id='email-address'
                                            value={email}
                                            onChange={this.onChangeEmail}
                                            required
                                        />
                                    </div>
                                    <div className='mv3'>
                                        <label className='db fw6 lh-copy f9' htmlFor='password'>Password:</label>
                                        <input
                                            className='b pa2 input-reset ba bg-transparent w-100'
                                            type='password'
                                            name='password'
                                            id='password'
                                            value={password}
                                            onChange={this.onChangePassword}
                                            required
                                        />
                                    </div>
                                </fieldset>
                                <div className=''>
                                    <input
                                        onClick={() => this.registerUser()}
                                        className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer fw1 dib'
                                        type='submit'
                                        value='Registar'
                                    />
                                </div>
                            </div>
                        </main>
                    </article>
                    <div className='flex'>
                        <div id='tamanhoesquerda' className='tr pa3'>
                            <h2 id='fonte' className='pa3'>Salmão</h2>
                            <p>
                                O salmão é um peixe altamente nutritivo, rico em proteínas, ácidos graxos ómega-3, vitaminas e minerais importantes. Ele ajuda a melhorar a saúde do coração, cérebro, olhos e pode até mesmo reduzir o risco de certos tipos de cancro. Além disso, o salmão é uma escolha saudável para quem busca uma dieta com baixo teor de gordura saturada e colesterol.
                            </p>
                        </div>
                        <div id='tamanho-meio' className='pa3'>
                            <div className='retangulo-um'></div>
                            <div className='retangulo-dois'></div>
                        </div>
                        <div id='tamanhodireita' className='tl pa3'>
                            <img className='fish' src={fish} alt='fish' style={{ alignSelf: 'center' }} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(Register);
