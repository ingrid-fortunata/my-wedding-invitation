import React from "react";
import ingridphoto from "../../Assets/ingriddummy.jpg";
import "./BrideStyle.css";

export default function Groom() {
  return (
    <div className="bride-container">
      <div className="bride-information">
        <h1>THE BRIDE</h1>
        <p>
          Hi, I am Ingrid! Born on October 1 as the only child of the couple
          Fortuin Japar & Liauw Mei Fong, is the child who has been eagerly
          awaited during my parents' marriage life. I studied Pharmacy at
          University of Indonesia. My life isn't easy because I prefer unique
          things in life. However, I'm able to find myself and accepting who I
          am little by little because of this wonderful man! He's my Lucky Star!
        </p>
        <p className="signature"> - Ingrid</p>
      </div>
      {/* <div> */}
      <img src={ingridphoto} alt="brideimage" className="bride-photo" />
      {/* </div> */}
    </div>
  );
}
