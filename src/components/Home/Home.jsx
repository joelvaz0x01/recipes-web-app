import React, { Component } from "react";
import './home.css';
import chef from '../../assets/images/chef.jpg'
import spoon from '../../assets/images/spoon.png'
import { withRouter } from '../../common/with-route';

class Home extends Component {
    render() {
        return (
            <div className='inicio' >
                <div>
                    <h1 className='pl5'>Em que acreditamos</h1>
                </div>
                <div className='flex'>
                    <div id='tamanho_img'>
                        <img className='pl5 w-90' src={chef} alt='chef' />
                    </div>
                    <div id='tamanho_img-dois' className='mr2'>
                        <img src={spoon} className="" alt='spoon' />
                        <p className='fontep'>
                            Acreditamos que cozinhar e compartilhar receitas é uma forma de conexão humana. As receitas permitem-nos unir culturas, pessoas e histórias, além de criar memórias duradouras com os nossos entes queridos.
                        </p>
                        <img src={spoon} className='pt5' alt='spoon' />
                        <p className='fontep'>
                            Além disso, valorizamos a diversidade culinária. Acreditamos que cada país, cada região e cada cultura tem a sua própria tradição gastronómica única. Por isso, no nosso site, procuramos apresentar receitas de diferentes partes do mundo, para que os nossos leitores possam experimentar novos sabores e conhecer outras culturas.
                        </p>
                        <img src={spoon} className='pt5' alt='spoon' />
                        <p className='fontep'>
                            Também acreditamos na importância de uma alimentação saudável e equilibrada. Por isso, o nosso site de receitas tem um compromisso em oferecer opções nutritivas, saborosas e fáceis de preparar. Acreditamos que a alimentação pode ser uma ferramenta poderosa para promover a saúde e o bem-estar.
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Home);
