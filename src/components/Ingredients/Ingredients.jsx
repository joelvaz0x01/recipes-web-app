import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ingredients.css';
import SearchBox from './SearchBox'
import { withRouter } from '../../common/with-route';
import RecipesDataService from "../../services/recipes.service";
import BuildPDF from './BuildPDF';

class Ingredientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchField: '',
            name: this.props.name,
            recipeId: 0,
            download: false
        };
    }

    componentDidMount() {
        this.getAllRecipes();
    }

    onChangeDownload = (id) => {
        this.setState({ recipeId: id });
        this.setState({ download: true });
    };

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    searchRecipes = (event) => {
        var data = {
            name: event.target.value
        }

        RecipesDataService.findByName(data)
            .then(response => {
                this.setState({ data: response.data });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    getAllRecipes = () => {
        RecipesDataService.getAll()
            .then(response => {
                this.setState({ data: response.data });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        const { data, download, recipeId } = this.state;
        const { username } = this.props;
        return (
            <>
                {
                    download
                        ? <>
                            <div className='receita_final pl5 pt5'>
                                <h1>A sua receita está pronta ...</h1>
                                <input type='submit' value='Voltar' className='nav__item_button_receitas pa3' onClick={() => this.setState({ download: false })} />
                            </div>
                            <div className='w-100'>
                                <div className='pdf-div'>
                                    <BuildPDF data={data[recipeId]} />
                                </div>
                            </div>
                        </>
                        : <div className='inicio'>
                            <div>
                                <h1 className='pl5'>Pesquise a sua receita!</h1>
                            </div>
                            <div className='flex'>
                                <SearchBox
                                    searchRecipes={this.searchRecipes}
                                />
                            </div>
                            {
                                data.map((item, index) => (
                                    <div className="" key={item.id}>
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                        {
                                            username
                                                ? <>
                                                    <br />
                                                    <input onClick={() => this.onChangeDownload(index)} type="submit" value="Descarregar PDF" className="nav__item_button_receitas pa3" />
                                                    <br />
                                                </>
                                                : <>
                                                    <br />
                                                    <h3 className='h3_d'>Faça <Link id='cor' to='/login'>login</Link> para descarregar a receita.</h3>
                                                    <br />
                                                </>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                }
            </>
        )
    }
}

export default withRouter(Ingredientes);
