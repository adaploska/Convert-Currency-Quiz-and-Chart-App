import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

import "./menu.css";

export const Menu = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light MainBgColor">
      <a className="navbar-brand" href="#">
        <img className="logo" src="./accountant.png" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {routes
            .filter(route => route.title && route.path)
            .map((route, index) => (
              <NavLink
                className="nav-item nav-link active"
                key={index}
                exact
                to={route.path}
              >
                {route.title}
              </NavLink>
            ))}
        </div>
      </div>
    </nav>
  </div>
);

// <nav>
//     <NavLink exact to="/">Główna</NavLink>
//     <NavLink exact to="/quiz">Quiz</NavLink>
//     <NavLink exact to="/memo">Memo</NavLink>
// </nav>
