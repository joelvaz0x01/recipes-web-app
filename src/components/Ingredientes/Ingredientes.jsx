import React, { Component, useEffect, useState } from "react";
import './ingredientes.css';
import SearchBox from './Receitas'
import { withRouter } from '../../common/with-route';
// import { main } from '../../../backend/server';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
    // async componentDidMount() {
    //     const db = await main();
    //     const collection = db.collection('Receita'); // Replace with your collection name

    //     const result = await collection.find().toArray();
    //     this.setState({ data: result });
    // }


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
export default withRouter(Ingredientes);
