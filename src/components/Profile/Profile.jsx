import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import './profile.css';

class Profile extends Component {

    render() {
        const { email, username } = this.props;
        if (!email && !username) {
            return <Navigate to="/login" replace={true} />
        } else {
            return (
                <div>
                    <h1>Perfil de {username}</h1>
                    <p>Email {email}</p>
                </div>
            )
        }
    }
}
export default Profile;
