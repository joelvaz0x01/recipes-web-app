import { Navbar, Login, Register, WhatWeBelive, Ingredientes } from './components';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<WhatWeBelive />} />
        <Route path='/ingredientes' element={<Ingredientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
