import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "gatsby";

import "./nav.css";

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/about">
          About
        </Link>
      </li>
      <li className="nav-list-item">
        <Link activeStyle={{ borderBottom: "2px solid #a64ac9" }} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
