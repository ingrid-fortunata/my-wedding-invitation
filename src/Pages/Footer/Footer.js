import React from "react";
import footerimage from "../../Assets/footerimage.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div
          className="footer-background"
          style={{
            backgroundImage: `url(${footerimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
        >
          {/* <img src={countdownbackground} alt="countdown" /> */}
          <div className="footer-overlay">
            <div className="footer-overlay-content">
              <div>
                <div className="footer-name2">
                  "A relationship where you can be weird together is your best
                  choice"
                </div>
                <div className="footer-name">- Paulo Coelho</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
