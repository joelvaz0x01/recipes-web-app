import { Navbar, Login, Register, Home, Ingredientes, NotFound, Admin } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: 'admin',
      isLoggedIn: true,
      isAdmin: false
    }
  }

  logoutUser = () => {
    this.setState({ email: '' });
    this.setState({ username: '' });
    this.setState({ isLoggedIn: false });
    this.setState({ isAdmin: false });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          username={this.state.username}
          logoutUser={this.logoutUser}
          isAdmin={this.state.isAdmin}
        />
        <Routes>
          <Route path="/login" Component={
            () =>
              <><Login
                email={this.state.email}
                username={this.state.username}
                isLoggedIn={this.state.isLoggedIn}
              /></>
          } />
          <Route path='/register' Component={
            () =>
              <><Register
                email={this.state.email}
                username={this.state.username}
                isLoggedIn={this.state.isLoggedIn}
              /></>
          } />
          <Route exact path='/' Component={
            () =>
              <><Home /></>
          } />
          <Route path='/recipes' Component={
            () =>
              <><Ingredientes
                username={this.state.username}
              /></>
          } />
          <Route path='/admin' Component={
            () =>
              <><Admin
                email={this.state.email}
                username={this.state.username}
                isLoggedIn={this.state.isLoggedIn}
                isAdmin={this.state.isAdmin}
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
