import { Navbar, Login, Register, Home, Ingredientes, NotFound, Admin } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      isLoggedIn: false,
      isAdmin: false
    }
  }

  updateEmail = (email) => {
    this.setState({ email: email });
  }

  updateUsername = (username) => {
    this.setState({ username: username });
  }

  updateIsLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn });
  }

  updateIsAdmin = (isAdmin) => {
    this.setState({ isAdmin: isAdmin });
  }

  logoutUser = () => {
    this.setState({ email: '' });
    this.setState({ username: '' });
    this.setState({ isLoggedIn: false });
    this.setState({ isAdmin: false });
  }

  render() {
    const { email, username, isLoggedIn, isAdmin } = this.state;
    return (
      <BrowserRouter>
        <Navbar
          username={this.state.username}
          isAdmin={this.state.isAdmin}
          logoutUser={this.logoutUser}
        />
        <Routes>
          <Route path="/login" Component={
            () =>
              <><Login
                username={username}
                email={email}
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
                updateEmail={this.updateEmail}
                updateUsername={this.updateUsername}
                updateIsAdmin={this.updateIsAdmin}
                updateIsLoggedIn={this.updateIsLoggedIn}
              /></>
          } />
          <Route path='/register' Component={
            () =>
              <><Register
                email={email}
                username={username}
                isLoggedIn={isLoggedIn}
              /></>
          } />
          <Route exact path='/' Component={
            () =>
              <><Home /></>
          } />
          <Route path='/recipes' Component={
            () =>
              <><Ingredientes
                username={username}
              /></>
          } />
          <Route path='/admin' Component={
            () =>
              <><Admin
                email={email}
                username={username}
                isLoggedIn={isLoggedIn}
                isAdmin={isAdmin}
              /></>
          } />
          <Route path="*" Component={
            () =>
              <><NotFound /></>
          }></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
