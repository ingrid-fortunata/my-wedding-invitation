import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../Assets/image1.jpg";
import img2 from "../../Assets/image2.jpg";
import img3 from "../../Assets/image3.jpg";
import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron-container">
      <div>
        <AwesomeSlider bullets={false}>
          <div data-src={img1} />
          <div data-src={img2} />
          <div data-src={img3} />
        </AwesomeSlider>
        <div className="jumbotron-overlay">
          <div className="jumbotron-name">Lucky & Ingrid</div>
          <div className="jumbotron-name2">WE'RE GETTING MARRIED</div>
          <div className="jumbotron-heartbeat">
            <div className="jumbotron-heartbeat-title">Save the date</div>
            <div className="jumbotron-heartbeat-date">18 September 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}
