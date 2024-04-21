import React from "react";
import "../styles/navbar.css";
import logo from "../uparrow.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img classname="img" src={logo} alt="Logo" />
        </Link>
      </div>
      <button className="navbar-menu-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link to='/'>Home</Link>
        </li>
        <li className="navbar-menu-item">
          <a href="/about">About Us</a>
        </li>
        <li className="navbar-menu-item">
          <Link to="/service">Service</Link>
        </li>
        <li className="navbar-menu-item">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
