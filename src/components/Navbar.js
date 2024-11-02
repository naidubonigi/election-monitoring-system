import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Election Monitoring System</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/admin" className="navbar-link" activeClassName="active-link">
            Admin
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/citizen" className="navbar-link" activeClassName="active-link">
            Citizen
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/observer" className="navbar-link" activeClassName="active-link">
            Election Observer
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/data-analyst" className="navbar-link" activeClassName="active-link">
            Data Analyst
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/login" className="navbar-link" activeClassName="active-link">
            Login
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/signup" className="navbar-link" activeClassName="active-link">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
