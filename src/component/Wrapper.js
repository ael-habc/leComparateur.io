import React from "react";
import "./Wrapper.css";

import sec1_1 from "../assets/images/sec1-1.svg";
import sec1_2 from "../assets/images/sec1-2.svg";
import sec1_3 from "../assets/images/sec1-3.svg";

export default function Wrapper() {
  return (
    <div className="wrapper">
      <h2>
        Trouvez <span> votre offres fibres </span>et souscrivez à la plus
        <span> adaptée à vos besoins</span> au meilleur prix
      </h2>
      <div className="cards">
        <div className="card">
          <img src={sec1_1} alt="card1" />
          <h3>Comparez les Box Internet</h3>
          <p>
            Comparez les offres Fibre pour choisir l’abonnement le plus{" "}
            <strong>adapté à vos besoins avec nos conseillers</strong>
          </p>
        </div>
        <div className="card">
          <img src={sec1_2} alt="card2" />
          <h3>Changement d'opérateur Gratuit</h3>
          <p>
            Faites-
            <strong>vous rembourser jusqu'à 150€ </strong>sur les Frais de
            Résiliation de votre ancien opérateur
          </p>
        </div>
        <div className="card">
          <img src={sec1_3} alt="card3" />
          <h3>Remise de -55% pendant 1 an</h3>
          <p>
            Avec les promotions en cours, vous pourriez{" "}
            <strong> économiser jusqu'à 300€</strong> la première année.
          </p>
        </div>
      </div>
    </div>
  );
}
