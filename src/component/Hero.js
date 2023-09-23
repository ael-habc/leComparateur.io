import React from "react";


import light from "../assets/images/light.svg";
import phone from "../assets/images/phone.svg";

import './Hero.css'

export default function Hero() {
  return (
    <div id="hero">
      <div className="container">
        <h1>
          Trouvez le meilleur opérateur pour une connexion internet très haut
          débit
        </h1>
        <div className="littleCard">
            <img src={light} alt="light"/>
            <p>Quelle Box fibre choisir ?</p>
            <p>Comparez les offres box internet</p>
        </div>
        <div className="littleCard">
            <img src={phone} alt="light"/>
            <p>Quelle Box fibre choisir ?</p>
            <p>Comparez les offres box internet</p>
        </div>
      </div>
    </div>
  );
}
