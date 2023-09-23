import React from "react";

// import images
import logo from "../assets/images/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full h-30 px-11 py-7 fixed pr-20 z-50">
      <div className="flex justify-center items-center gap-2">
        <img className="logo w-14 h-14" src={logo} alt="Logo"/>
        <h1 className="font-nonito text-[#212C42] ">leComparatreur.io</h1>
      </div >
        <ul className="flex gap-10 justify-center items-center">
          <li className="text-[#54C0EB] font-nonito text-xl">La Fibre</li>
          <li className="text-xl font-nonito font-semibold">Sante Senior</li>
          <li className="text-xl font-nonito font-semibold">Chien Chat</li>
          <li className="text-xl font-nonito font-semibold">Internet</li>
        </ul>
    </nav>
  );
}
