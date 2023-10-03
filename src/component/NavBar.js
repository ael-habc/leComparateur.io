import React from "react";
import { NavLink } from "react-router-dom";

// import images
import logo from "../assets/images/logo.svg";
import './Navbar.css'

export default function NavBar() {
  return (
    <nav>
      <div id="navLogo">
        <img src={logo} alt="Logo" id="logo"/>
        <h1 id="title">lecomparateur.io</h1>
      </div>
      <i></i>
      <ul id="navList">
        <li> <a href='/'>La Fibre</a>  </li>
        <li> <a href='internet'>Internet</a> </li>
      </ul>
    </nav>
  );
}
