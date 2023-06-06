import React from 'react';
import { withRouter } from '../../common/with-route';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa w-100 pl4'>
            <input
                className='pa3 w-70 ba'
                style={{ backgroundColor: '#c8c8c8' }}
                type='search'
                placeholder='Procurar receitas'
                onChange={searchChange}
            />
        </div>
    );
}

export default withRouter(SearchBox);