import React, { Component } from 'react';
import { withRouter } from '../../common/with-route';

export class NotFound extends Component {
    render() {
        return (
            <div className='center'>
                <h1>404 - Page Not Found</h1>
                <p>A página <code>{window.location.pathname}</code> não foi encontrada.</p>
            </div>
        )
    }
}
export default withRouter(NotFound);
