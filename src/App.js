import logo from './logo.svg';
import './App.css';
import React from "react";
import {} from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route,Link,Switch,Router} from "react-router-dom"
import Navbar from './layouts/Navbar.js'
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
