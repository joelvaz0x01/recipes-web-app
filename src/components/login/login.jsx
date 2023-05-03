import React from 'react';
import './login.css';
import knife from '../../images/knife.png';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginEmail: '',
      LoginPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({LoginEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({LoginPassword: event.target.value})
  }

  onSubmitLogin = () => {
    fetch('http://localhost:3000/Login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.LoginEmail,
        password: this.state.LoginPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className='background'>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{backgroundColor: '#DCCA87'}}>
          <main className="pa4">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Login</legend>
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
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitLogin}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer fw1 db"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="lh-copy mt3 tc">
                <p  onClick={() => onRouteChange('register')} className="fw1 link dim black db pointer">Register</p>
              </div>
            </div>
          </main>
        </article>
        <div className='flex'>
          <div id='tamanhoesq' className='tr pa3'>
            <h2 id='fonte' className='pa3'>Receitas Divertidas</h2>
            <p>Receitas saudáveis e divertidas podem tornar a alimentação saudável muito mais interessante. Algumas opções incluem smoothies coloridos com frutas e vegetais, tigelas de açaí com coberturas de frutas e granola, saladas de frutas em formas engraçadas,
               sanduíches de legumes com formatos divertidos e pizzas com base de couve-flor e coberturas saudáveis..</p>
          </div>
          <div id='tamanho2' className='pa3'>
            <img className='knife' src={knife} alt="faca" />
          </div>
          <div id='tamanhodir' className='tl pa3'>
          <h2 id='fonte' className='pa3'>Receitas Saudaveis</h2>
            <p>Receitas saudáveis são aquelas que são nutritivas e benéficas para o corpo. Essas receitas geralmente incluem ingredientes frescos e naturais, como frutas, verduras, grãos integrais e proteínas magras.
               Algumas opções saudáveis incluem saladas de quinoa, smoothies de frutas e vegetais, grelhados de peixe e frango, e sopas de legumes.</p>
          </div>

        </div>
        {/* <table>
          <tr>
            <td>
            <p className=''>Receitas são instruções detalhadas para cozinhar uma variedade de alimentos deliciosos. Elas são passadas de geração em geração, modificadas e adaptadas de acordo com o gosto pessoal de cada um. 
          Desde sobremesas até pratos principais, receitas são uma maneira maravilhosa de explorar diferentes culturas culinárias e sabores.</p>
            </td>
            <td><img className='knife' src={knife} alt="faca" /></td>
            <td></td>
          </tr>
        </table> */}

      </div>
    );
  }
}

export default Login;