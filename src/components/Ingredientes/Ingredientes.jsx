import React, { Component, useEffect, useState } from "react";
import './ingredientes.css';
import SearchBox from './Receitas'
import { withRouter } from '../../common/with-route';
import MyDocument from "./pdf";
import { Page, PDFViewer } from '@react-pdf/renderer';
// import { main } from '../../../backend/server';

class Ingredientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchField: '',
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    }

    render() {
        const { data, searchField } = this.state;
        const { username } = this.props;

        const filteredData = data.filter((item) =>
            item.name_recipe.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="inicio">
                <div>
                    <h1 className="pl5">Pesquisa a tua receita!</h1>
                </div>
                <div className="flex">

                    <SearchBox searchChange={this.onSearchChange} />
                    {filteredData.map((item) => (
                        <div key={item._id}>
                            <h2>{item.name_recipe}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}


                    {/* <button className="nav__item_button_receitas pa3" >Pesquisar</button> */}

                </div>

                <div className="">
                    {
                        !username
                            ? <div className="w-20 pa3">
                                <h3 className="h3_d">Faça login para descarregar o PDF a receita.</h3>
                            </div>
                            : <>
                                <div className="receita_final pl5 pt5 ">
                                    <h1>A sua receita está pronta ...</h1>
                                </div>
                                <div className="w-100">
                                    <div className='pdf-div'>
                                        <PDFViewer className='pdf-view'>
                                            <MyDocument />
                                        </PDFViewer>
                                    </div>
                                </div>
                         </>
                    }
                </div>
            </div>
        )
    }
}
export default withRouter(Ingredientes);
