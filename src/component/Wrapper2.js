import React from "react";

import "./Wrapper2.css";
import phone from "../assets/images/phone_dark.svg";

export default function Wrapper2() {
  return (
    <div id="wrapper2">
      <div className="whiteSlach1 angle1"></div>
      <p className="contact">
        Découvrez l'offre Internet par fibre parfaitement ajustée à vos besoins
        en seulement 2 clics. ✔️
      </p>

      <a href="/internet" className="linkPhone">
        <div className="littleCard light" id="dark_phone">
          {/* <img src={phone} alt="phone" /> */}
          <div>
            <p>Comparez les offres box internet</p>
            {/* <p>0637179071</p> */}
            {/* <p>Le fibre avec mailleur prix</p> */}
          </div>
        </div>
      </a>
      <div className="whiteSlach2 angle2"></div>
    </div>
  );
}
