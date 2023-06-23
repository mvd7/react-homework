import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
        width={300}
        alt="Star Wars Logo"
      />
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/people">
            People
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/planets">
            Planets
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
