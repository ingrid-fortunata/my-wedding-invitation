import React, { useEffect, useState } from "react";
import countdownbackground from "../../Assets/countdownbackground.jpg";
import "./Countdown.css";
import FlipCountdown from "@rumess/react-flip-countdown";

export default function Countdown() {
  
  const [width,setwidth] = useState(window.screen.width);

  const [size,setSize] = useState(window.screen.width<848?"small":"medium")
  
  
  window.addEventListener("resize", e=>{
    setwidth(e.target.screen.width);
  });

  useEffect(()=>{
    setSize(window.screen.width<848?"small":"medium")
  },[width])
  
  return (
    <div className="countdown-container">
      <div>
        <div className="countdown-background" style={{ backgroundImage:`url(${countdownbackground})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionY:"center"}}>
          {/* <img src={countdownbackground} alt="countdown" /> */}
          <div className="countdown-overlay">
            <div className="countdown-overlay-content">
              <div>
                <div className="countdown-name">We are waiting for....</div>
                <div className="countdown-name2">The adventure</div>
              </div>
              <div className="countdown-flipper">
                <FlipCountdown
                  endAt={"2021-09-18 00:00:00"}
                  size={size}
                  theme="light"
                  hideYear
                />
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
