import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import './admin.css';
import RecipesDataService from "../../services/recipes.service";
import { withRouter } from '../../common/with-route';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.addRecipe = this.addRecipe.bind(this);
        this.removeRecipe = this.removeRecipe.bind(this);

        this.state = {
            name: '',
            description: '',
            instructions: '',
            isPublished: true
        };
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    onChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    };

    onChangeInstructions = (event) => {
        this.setState({ instructions: event.target.value });
    };

    onChangeIsPublished = (event) => {
        this.setState({ isPublished: event.target.value });
    };

    addRecipe = () => {
        var data = {
            name: this.state.name,
            description: this.state.description,
            instructions: this.state.instructions,
            isPublished: this.state.isPublished
        };

        RecipesDataService.create(data)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    preparation: response.data.preparation,
                    ingredients: response.data.ingredients
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    removeRecipe = () => {
        var data = {
            name: this.state.name,
            description: this.state.description,
            instructions: this.state.instructions,
            isPublished: this.state.isPublished
        };

        RecipesDataService.delete(data)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    preparation: response.data.preparation,
                    ingredients: response.data.ingredients
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        const { username, isLoggedIn, isAdmin } = this.props;
        if (!isLoggedIn && !isAdmin) {
            return <Navigate to="/login" replace={true} />
        } else {
            return (
                <div>
                    <h1>Perfil de {username}</h1>
                    <div className="frente">
                        <h2 className="h22">Insira o nome da receita</h2>
                        <input className="" type="text" onChange={this.onChangeName}  style={{ width: '30%', backgroundColor: '#c8c8c8' }}/>
                    </div>
                    <div className="frente">
                        <h2 className="h22">Descrição</h2>
                        <input type="text" onChange={this.onChangeDescription} style={{ width: '30%', backgroundColor: '#c8c8c8' }} />
                    </div>
                    <div className="frente">
                        <h2 className="h22">Instruções</h2>
                        <textarea name="textModo" rows={4} cols={40} onChange={this.onChangeInstructions} style={{ width: '30%', backgroundColor: '#c8c8c8' }} />
                    </div>
                    <div className="frente">
                        <input type="submit" className="nav__item_button_sign" value="Adicionar receita" onClick={this.addRecipe} />
                    </div>
                </div>
            )
        }
    }
}
export default withRouter(Profile);
