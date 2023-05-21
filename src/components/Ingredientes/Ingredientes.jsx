import React, { Component } from "react";
import './ingredientes.css';

class Ingredientes extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         buttonColor: '#c8c8c8'
    //     };
    // }

    // handleClick() {
    //     this.setState({ buttonColor: '#DCCA87' }); // Define a cor de fundo do botão quando clicado
    // }

    render() {
        const { username } = this.props
        return (
            <div className="inicio">
                <div>
                    <h1 className="pl5">Seleciona os Ingredientes que tens em casa para fazeres a tua receita!</h1>
                </div>
                <div class="flex">
                    <div class="bordinha  w-10 pa3 mr2">
                        <button className="preto  w-100 pa3">Arroz</button>
                    </div>
                    <div class="bordinha w-10 pa3 mr2">
                        <button className="preto  w-100 pa3">Arroz</button>
                    </div>
                    <div class="bordinha  w-10 pa3 mr2">
                        <button className="preto w-100 pa3">Arroz</button>
                    </div>
                    <div class="bordinha w-10 pa3 mr2">
                        <button className="preto  w-100 pa3">Arroz</button>
                    </div>
                    <div class="bordinha w-10 pa3">
                        <button className="preto  w-100 pa3">Arroz</button>
                    </div>
                    <div class="bordinha w-10 pa3">
                        <button className="nav__item_button_receitas pa3" >Pesquisar</button>
                    </div>
                </div>
                <div className="receita_final pl5 pt5 ">
                    <h1>A sua receita está pronta ...</h1>
                    <ul className="">
                        <li>100g de carne</li>
                        <li>100g de tomate</li>
                        <li>100g de garlic</li>
                        <li>100g de leite</li>
                        <li>100g de cebola</li>
                    </ul>
                </div>
                <div className="flex pt5">
                    {
                        !username
                            ? <div className="w-20 pa3">
                                    <h3 className="h3_d">Faça login para descarregar o PDF a receita.</h3>
                            </div>
                            : <>
                                <div className="w-20 pa3">
                                    <h3 className="h3_d">Faça download da sua receita em PDF.</h3>
                                </div>
                                <div className="w-10 pa3">
                                    <button className="nav__item_button_receitas_d pa3">Download</button>
                                </div>

                            </>
                    }
                </div>
            </div>
        )
    }
}
export default Ingredientes;
