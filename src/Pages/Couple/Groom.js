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
          Hi, I am Lucky! I was born without bothering everyone on May 21st. I
          am the second son of three siblings. I studied IT at Binus University
          and I'm fortunately so good at it! I lived my life flatly (watching
          movies alone, doing my eating & gaming hobbies, and sleeping of
          course) before meeting this strange woman as this woman who makes my
          life more colorful!
        </p>
        <p className="signature"> - Lucky</p>
      </div>
    </div>
  );
}
