import React from "react";
import "./Family.css";
import textdecor from "../../Assets/textdecor.png";
import GroomsFamily from "./Components/GroomsFamily";
import BridesFamily from "./Components/BridesFamily";

export default function Family() {
  return (
    <div className="family-container">
      <div className="family-main-title">
        <img src={textdecor} alt="textdecor" />
        <div className="family-maintitle-text">Our Families</div>
      </div>

      <div>
        <h3 className="family-title">Lively Groom's Family</h3>
        <GroomsFamily />
      </div>

      <div>
        <h3 className="family-title">Peaceful Bride's Family</h3>
        <BridesFamily />
      </div>
    </div>
  );
}
