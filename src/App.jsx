import { Navbar, Login, Register, Home, Ingredientes, NotFound, Profile } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import { MongoClient, ServerApiVersion } from 'mongodb';
// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://johndongs:ojoelefixe@receitas.2topjir.mongodb.net/?retryWrites=true&w=majority";
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

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  client = () =>
    new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

  run = async () => {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  render() {
    run().catch(console.dir);
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
