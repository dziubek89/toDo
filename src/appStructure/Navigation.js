import React from "react";
import "./style/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-sidebar">
      <ul>
        <li>
          <NavLink to="/">news</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/toDoApp">To-Do-App</NavLink>
        </li>
        <li>
          <NavLink to="/next">Next App</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
