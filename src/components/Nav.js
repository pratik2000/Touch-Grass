import React from "react";
import { Link, withRouter } from "react-router-dom";

function Nav(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Touch Grass
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Map" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Map">
                  Map
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/User" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/User">
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