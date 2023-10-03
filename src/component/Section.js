import React from "react";

import "./Section.css";

export default function Section() {
  return (
    <div className="section">
      <div>
        <div className="chiffre">-50%</div>
        <div className="section_text">
          Ce sont les économies que vous réalisez tous les mois
        </div>
      </div>
      <div>
        <div className="chiffre">x10</div>
        <div className="section_text">
          C'est la vitesse que vous gagnez avec la fibre très haut débit
        </div>
      </div>
      <div>
        <div className="chiffre">200k</div>
        <div className="section_text">
          C'est le nombre d’utilisateurs que nous avons accompagnés
        </div>
      </div>
    </div>
  );
}
