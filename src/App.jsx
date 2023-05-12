import { Navbar, Login, Register, WhatWeBelive, Ingredientes, NotFound } from './components';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
        <Navbar />
        <Routes>
          <Route path="/login" Component={
            () =>
              <><Login
                LoginEmail={this.state.email}
                LoginPassword={this.state.password}
              /></>
          } />
          <Route path='/register' Component={
            () =>
              <><Register /></>
          } />
          <Route path='/' Component={
            () =>
              <><WhatWeBelive /></>
          } />
          <Route path='/ingredientes' Component={
            () =>
              <><Ingredientes /></>
          } />
          <Route path="*" Component={
            () =>
              <><NotFound /></>
          }></Route>
        </Routes>
      </BrowserRouter>
    );
  }

}
export default App;
