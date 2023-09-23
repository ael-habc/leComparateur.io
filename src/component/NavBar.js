import React from "react";

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
        <li>La Fibre</li>
        <li>Sante Senior</li>
        <li>Chien Chat</li>
        <li>Internet</li>
      </ul>
    </nav>
  );
}
