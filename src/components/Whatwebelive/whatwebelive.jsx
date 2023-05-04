import React from "react";
import './whatwebelive.css';
import chef from '../../images/chef.jpg'
import colher from '../../images/Vector.png'

function WhatWeBelive(props) {

    return (
        <div className="inicio">
            <div>
                <h1 className="pl5">Em que acreditamos</h1>
            </div>
            <div class="flex">
                <div id="tamanho_img" class="">
                    <img className="pl5 w-90" src={chef} alt="chef" />
                </div>
                <div id="tamanho_img-dois" class="mr2">
                    <img src={colher} className="" alt='colher' />
                    <p className="fontep">Acreditamos que cozinhar e compartilhar receitas é uma forma de conexão humana. As receitas
                        nos permitem unir culturas, pessoas e histórias, além de criar memórias duradouras com nossos entes queridos.</p>
                    <img src={colher} className="pt5" alt='colher' />
                    <p className="fontep">Além disso, valorizamos a diversidade culinária. Acreditamos que cada país, cada região e cada cultura tem sua própria tradição gastronômica única. Por isso, em nosso site, buscamos
                        apresentar receitas de diferentes partes do mundo,
                        para que nossos leitores possam experimentar novos sabores e conhecer outras culturas.</p>
                    <img src={colher} className="pt5" alt='colher' />
                    <p className="fontep">Também acreditamos na importância de uma alimentação saudável e equilibrada. Por isso, nosso site de receitas tem um compromisso em oferecer opções nutritivas, saborosas e fáceis de preparar
                    . Acreditamos que a alimentação pode ser uma ferramenta poderosa para promover a saúde e o bem-estar.</p>
                </div>
            </div>
        </div>

    );
}
export default WhatWeBelive;