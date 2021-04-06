import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles.css";

const ELink = (props) => (
  <Link className="btn btn-menu" {...props}>
    {props.children}
  </Link>
);

export const Header = ({ children }) => (
  <Router>
    <div>
      <div className="header">
        <p className="title margin">William Martinez</p>
        <nav className="margin">
          <ul className="row">
            <li>
              <ELink to="/">Home</ELink>
            </li>
            <li>
              <ELink to="/about">About</ELink>
            </li>
            <li>
              <ELink to="/projects">Projects</ELink>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  </Router>
);
