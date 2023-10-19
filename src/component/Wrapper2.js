import React from "react";

import "./Wrapper2.css";
import phone from "../assets/images/phone_dark.svg";

export default function Wrapper2() {
  return (
    <div id="wrapper2">
      <div className="whiteSlach1 angle1"></div>
      <p className="contact">
        Trouvez l’offre Fibre la plus adaptée à vos besoins en un appel gratuit
        avec un conseiller ✔️
      </p>

      <a href="tel:063717907" className="linkPhone">
        <div className="littleCard light" id="dark_phone">
          <img src={phone} alt="phone" />
          <div>
            <p>0637179071</p>
            <p>Le fibre avec mailleur prix</p>
          </div>
        </div>
      </a>
      <div className="whiteSlach2 angle2"></div>
    </div>
  );
}
