import React from "react";

import "./Wrapper3.css";

import sec2_1 from "../assets/images/sec2-1.svg";
import sec2_2 from "../assets/images/sec2-2.svg";
import sec2_3 from "../assets/images/sec2-3.svg";
export default function Wrapper3() {
  return (
    <div className="wrapper3">
      <div>Quelle box fibre choisir ?</div>
      <h2>
        Recevez
        <span> une offre box internet parfaite</span>
        <span> en 3 étapes seulement</span>
      </h2>
      <div className="cards2">
        <div className="card2" id="card1">
          <img src={sec2_1} alt="card1" />
          <h3 id="sec2">Appelez nos conseillers fibre du lundi au vendredi de 10h à 20h</h3>
        </div>
        <div className="card2">
          <img src={sec2_2} alt="card2" />
          <h3 id="sec2">
            Comparez les box pour trouver l'offre parfaite au meilleur prix !
          </h3>
        </div>
        <div className="card2">
          <img src={sec2_3} alt="card3" />
          <h3 id="sec2">Vous choisissez l'offre qui vous convient, on s'occupe du reste</h3>
        </div>
      </div>
    </div>
  );
}
