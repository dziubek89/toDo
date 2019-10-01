import React from "react";
import "./style/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-sidebar">
      <ul>
        <li>
          <NavLink exact={true} to="/">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/toDoApp">ToDo App</NavLink>
        </li>
        <li>
          <NavLink to="/next">Next App</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
