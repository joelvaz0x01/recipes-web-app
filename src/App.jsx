import { Navbar, Login, Register, Home, Ingredientes, NotFound, Profile } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: ''
    }
  }

  logoutUser = () => {
    this.setState({ email: '' });
    this.setState({ username: '' });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar
          username={this.state.username}
          logoutUser={this.logoutUser}
        />
        <Routes>
          <Route path="/login" Component={
            () =>
              <><Login
                email={this.state.email}
                username={this.state.username}
              /></>
          } />
          <Route path='/register' Component={
            () =>
              <><Register
                email={this.state.email}
                username={this.state.username}
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
          <Route path='/dashboard' Component={
            () =>
              <><Profile
                email={this.state.email}
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
