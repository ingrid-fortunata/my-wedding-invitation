import React from "react";
import countdownbackground from "../../Assets/countdownbackground.jpg";
import "./CelebratingBanner.css";

export default function CelebratingBanner() {
  return (
    <div className="celebratingbanner-container">
      <div>
        <div
          className="celebratingbanner-background"
          style={{
            backgroundImage: `url(${countdownbackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
        >
          {/* <img src={countdownbackground} alt="countdown" /> */}
          <div className="celebratingbanner-overlay">
            <div className="celebratingbanner-overlay-content">
              <div>
                <div className="celebratingbanner-name">We are going to...</div>
                <div className="celebratingbanner-name2">
                  Celebrate Our Love
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
