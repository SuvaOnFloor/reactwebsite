import logo from './logo.svg';
import './App.css';
import React from "react";
import {} from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Link,Switch,Router} from "react-router-dom"
import Navbar from './layouts/Navbar.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
    </div>
    </BrowserRouter>

  );
}

export default App;
