import React, { Component } from 'react';
import peixe from '../../images/peixe.png'
import './register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {
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
                                        id="name"
                                        onChange={this.onNameChange}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f9" htmlFor="email-address">Email:</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f9" htmlFor="password">Password:</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent  w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <input
                                    onClick={this.onSubmitSignIn}
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
                        <p>O salmão é um peixe altamente nutritivo, rico em proteínas, ácidos graxos ômega-3, vitaminas e minerais importantes. Ele ajuda a melhorar a saúde do coração, cérebro, olhos e pode até mesmo reduzir o risco de certos tipos de câncer.
                            Além disso, o salmão é uma escolha saudável para quem busca uma dieta com baixo teor de gordura saturada e colesterol.</p>
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
        );
    }
}
export default Register;
