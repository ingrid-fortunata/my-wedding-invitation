import React from "react";
import ingridphoto from "../../Assets/ingriddummy.jpg";
import "./BrideStyle.css";

export default function Groom() {
  return (
    <div className="bride-container">
      <div className="bride-information">
        <h1>THE BRIDE</h1>
        <p>
          Hi, I am Ingrid! Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a gallery
        </p>
        <p className="signature"> - Ingrid</p>
      </div>
      <div>
        <img src={ingridphoto} alt="brideimage" className="bride-photo" />
      </div>
    </div>
  );
}
