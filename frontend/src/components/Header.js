import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a href="/" className="navbar-brand">
          API
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Artistas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Agregar
            </Link>
          </li>
        </div>
      </nav>    );
  }
}

export default Header;
