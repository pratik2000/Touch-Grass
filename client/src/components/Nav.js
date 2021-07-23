import React from "react";
import { Link, withRouter } from "react-router-dom";
//import logo from './logo.svg';

//<img src={logo} alt="Logo" /> 

function Nav(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          
          <Link className="navbar-brand" to="/">
            Touch Grass
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Map" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/Map">
                  Map
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/User" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/User">
                  User
                </Link>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Nav);