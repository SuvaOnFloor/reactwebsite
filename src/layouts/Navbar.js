import React, { Component } from 'react'
import {Link}  from "react-router-dom"
import logo from './logo.gif'; 
 class Navbar extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-dark full-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse"
   data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="navbar-brand" to="/"><img width="36" height="36" src={logo} alt=""></img>Agile Tech</Link>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
  </div>
</nav>
           
        )
    }
}

export default Navbar
