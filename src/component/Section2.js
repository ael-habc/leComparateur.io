import React from "react";
import "./Section2.css";

import sec3_1 from "../assets/images/sec3-1.svg";

export default function Section2() {
  return (
    <div className="section2">
      <div className="section2_container">
        Vous avez plus de 55 ans ? Multipliez <span>les économies</span>
      </div>
      <div className="section2_container2">
        <img src={sec3_1} alt="sec3_1" />
        <div className="section2_container2_text">
          <p>
            Comparez les <br/>
            <span> Mutuelles Santé Senior</span>
          </p>
        </div>
      </div>
    </div>
  );
}
