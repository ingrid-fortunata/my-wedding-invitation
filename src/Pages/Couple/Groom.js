import React from "react";
import luckyphoto from "../../Assets/luckydummy.jpg";
import "./GroomStyle.css";

export default function Groom() {
  return (
    <div className="groom-container">
      {/* <div className="groomphoto"> */}
        <img src={luckyphoto} alt="groomimage" className="groom-photo" />
      {/* </div> */}
      <div className="groom-information">
        <h1>THE GROOM</h1>
        <p>
          Hi, I am Lucky! Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a gallery
        </p>
        <p className="signature"> - Lucky</p>
      </div>
    </div>
  );
}
