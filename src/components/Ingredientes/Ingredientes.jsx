import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ingredientes.css';
import SearchBox from './Receitas'
import { withRouter } from '../../common/with-route';
import MyDocument from "./pdf";
import { PDFViewer } from '@react-pdf/renderer';
import RecipesDataService from "../../services/recipes.service";
// import { main } from '../../../backend/server';

class Ingredientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchField: '',
            name: this.props.name
        };
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value)
    }

    searchRecipes = () => {
        var data = {
            name: this.state.name
        };
        RecipesDataService.searchRecipes(data)
            .then(response => {
                this.setState({
                    name: response.data.name
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    
    
    findName = () => {
        var data = {
            name: this.state.name
        };
        RecipesDataService.findByTitle(data)
            .then(response => {
                this.setState({
                    name: response.data.name
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    //RecipesDataService.findByTitle(title)

    render() {
        const { data, searchField } = this.state;
        const { username } = this.props;

        const filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(searchField.toLowerCase())
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
                            <h2>{item.name}</h2>
                        </div>
                    ))}


                    {/* <button className="nav__item_button_receitas pa3" >Pesquisar</button> */}

                </div>

                <div className="">
                    {
                        !username
                            ? <div className="w-20 pa3">
                                <h3 className="h3_d">Faça <Link id="cor" to="/login">login</Link> para descarregar o PDF a receita.</h3>
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
