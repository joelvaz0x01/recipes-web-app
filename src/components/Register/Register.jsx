import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import peixe from '../../images/peixe.png'
import './register.css'
import { createUser } from '../../backend/db';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: '',
            name: this.props.name,
            error: null,
        };
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, email, password } = this.state;

        try {
            const userId = await createUser(name, email, password);
            console.log('User registered with ID:', userId);
            // Perform any additional actions after successful registration
        } catch (error) {
            console.error('Error registering user:', error);
            this.setState({ error: 'An error occurred while registering' });
        }
    };

    render() {
        //falta declarar a variavel name
        const { email, password, error } = this.state;
        const { name } = this.props
        if (name) {
            return <Navigate to="/dashboard" replace={true} />
        } else {
            return (
                <div className='background'>
                    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{ backgroundColor: '#DCCA87' }}>
                        <main className="pa4 black-80">
                            <div className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                    <legend className="f1 fw6 ph0 mh0">Registo</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f9" htmlFor="name">Nome:</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-100"
                                            type="text"
                                            name="name"
                                            value={name}
                                            id="name"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f9" htmlFor="email-address">Email:</label>
                                        <input
                                            className="pa2 input-reset ba bg-transparent w-100"
                                            type="email"
                                            name="email-address"
                                            id="email-address"
                                            value={email}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f9" htmlFor="password">Password:</label>
                                        <input
                                            className="b pa2 input-reset ba bg-transparent  w-100"
                                            type="password"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>
                                </fieldset>
                                <div className="">
                                    <input
                                        onClick={this.handleSubmit}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer fw1 dib"
                                        type="submit"
                                        value="Registar"
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
                            <img className='peixe' src={peixe} alt="peixe" style={{ alignSelf: 'center' }} />
                        </div>
                    </div>
                </div>
            )
        }

    }
}
export default Register;
