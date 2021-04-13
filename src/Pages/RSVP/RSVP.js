import React from "react";
import textdecor from "../../Assets/textdecor.png";
import reservationpic from "../../Assets/reservationpic.jpg";
import "./RSVP.css";
import Button from "react-bootstrap/Button";

export default function RSVP() {
  return (
    <div className="reservation-container">
      <div>
        <div
          className="reservation-background"
          style={{
            backgroundImage: `url(${reservationpic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "center",
          }}
        >
          {/* <img src={countdownbackground} alt="countdown" /> */}
          <div className="reservation-overlay">
            <div className="reservation-overlay-content">
              <div className="reservation-container-container">
                <div className="reservation-main-title">
                  <img src={textdecor} alt="textdecor" />
                  <div className="reservation-maintitle-text">
                    Join Our Party
                  </div>
                </div>

                <Button
                  variant="warning"
                  size="lg"
                  block
                  href="https://forms.gle/zdfdsCpA9SQhwXdN6"
                  style={{
                    marginTop: "30%",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Click here for reserving your spots!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
