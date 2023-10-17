import React from "react";

import light from "../assets/images/light.svg";
import phone from "../assets/images/phone.svg";

import "./Hero.css";

export default function Hero() {
  return (
    <div id="hero">
      <div className="container">
        <h1>
          Trouvez le meilleur <span> opérateur </span>pour une connexion{" "}
          <span> internet très haut débit</span>
        </h1>
        <div className="littleCard light">
          <img src={light} alt="light" />
          <div>
            <p>Quelle Box fibre choisir ?</p>
            <p>Comparez les offres box internet</p>
          </div>
        </div>
        <div className="littleCard phone">
          <img src={phone} alt="light" />
          <div>
            <p>Quelle Box fibre choisir ?</p>
            <p>Comparez les offres box internet</p>
          </div>
        </div>
      </div>
      <div className="whiteSlach angle"></div>
    </div>
  );
}
