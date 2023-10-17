import React from "react";

// import images
import logo from "../assets/images/logo2.png";
import "./Navbar.css";

// import burger menu from bootstrap-icons
import { BiMenu } from "react-icons/bi";

export default function NavBar() {
  return (
    <nav>
      <div id="navLogo">
        <img src={logo} alt="Logo" id="logo" />

        {/* <h1 id="title">lecomparateur.io</h1> */}
      </div>
      <input type="checkbox" id="btnControl" />
      <label class="btn" for="btnControl">
        <BiMenu id="burgerMenu" />
      </label>

      <ul id="navList">
        <li>
          {" "}
          <a href="/">La Fibre</a>{" "}
        </li>
        <li>
          {" "}
          <a href="internet">Internet</a>{" "}
        </li>
      </ul>
    </nav>
  );
}
