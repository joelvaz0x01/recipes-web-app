import React, { Component } from "react";
import './profile.css';

class Profile extends Component {

    render() {
        const { username } = this.props;
        return (
            <div>
                <div>Perfil de {this.props.username}</div>
            </div>
        )
    }
}
export default Profile;
