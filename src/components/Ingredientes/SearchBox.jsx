import React, { Component } from 'react';
import { withRouter } from '../../common/with-route';

class SearchBox extends Component {

    render() {
        const { searchRecipes } = this.props;
        return (
            <div className='pa w-100 pl4' >
                <input
                    className='pa3 w-70 ba'
                    style={{ backgroundColor: '#c8c8c8' }}
                    type='search'
                    placeholder='Procurar receitas'
                    onChange={searchRecipes}
                />
            </div>
        );
    }
}

export default withRouter(SearchBox);