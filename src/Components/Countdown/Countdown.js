import React, { useEffect, useState } from "react";
import countdownbackground from "../../Assets/countdownbackground.jpg";
import "./Countdown.css";
import FlipCountdown from "@rumess/react-flip-countdown";

export default function Countdown() {
  return (
    <div className="countdown-container">
      <div>
        <div className="countdown-background">
          <img src={countdownbackground} alt="countdown" />
        </div>
        <div className="countdown-overlay">
          <div>
            <div className="countdown-name">We are waiting for....</div>
            <div className="countdown-name2">The adventure</div>
          </div>
          <div className="countdown-flipper">
            <FlipCountdown
              endAt={"2021-09-18 00:00:00"}
              //   size="small"
              theme="light"
              hideYear
            />
          </div>
        </div>
      </div>
    </div>
  );
}
