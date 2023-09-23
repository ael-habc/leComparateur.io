import React from "react";

// import images
import logo from "../assets/images/logo.svg";

export default function NavBar() {
  return (
    <div className="flex justify-between w-full h-30 px-3 py-3 fixed">
      <div className="flex justify-center items-center gap-4">
        <img className="logo w-14 h-14" src={logo} alt="Logo"/>
        <h1 className="font-nonito text-[#212C42] ">LeComparatreur.io</h1>
      </div >
        <ul className="flex gap-10">
          <li className="text-[#54C0EB] font-nonito text-xl">La Fibre</li>
          <li className="text-xl">Sante Senior</li>
          <li className="text-xl">Chien Chat</li>
          <li className="text-xl">Internet</li>
        </ul>
    </div>
  );
}
