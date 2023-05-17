import { Navbar, Login, Register, Home, Ingredientes, NotFound, Profile } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: ''
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          username={this.state.username}
        />
        <Routes>
          <Route path="/login" Component={
            () =>
              <><Login
                email={this.state.email}
                password={this.state.password}
              /></>
          } />
          <Route path='/register' Component={
            () =>
              <><Register
                email={this.state.email}
                password={this.state.password}
              /></>
          } />
          <Route path='/' Component={
            () =>
              <><Home /></>
          } />
          <Route path='/receitas' Component={
            () =>
              <><Ingredientes
                username={this.state.username}
              /></>
          } />
          <Route path='/perfil' Component={
            () =>
              <><Profile
                username={this.state.username}
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
