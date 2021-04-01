import React from "react";
import textdecor from "../../Assets/textdecor.png";
import "./Timeline.css";
import firstmeetpic from "../../Assets/firstmeetpic.jpeg";
import firstdatepic from "../../Assets/firstdate.jpg";
import firstdatepic1 from "../../Assets/firstdate1.jpg";
import proposalpic from "../../Assets/proposal.jpg";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-main-title">
        <img src={textdecor} alt="textdecor" />
        <div class="timeline-maintitle-text">Our Journey</div>
      </div>

      <div className="content-maincontainer">
        <div className="content-container">
          <div className="content-text">
            <h3>First Meet</h3>
            <h5>Jan 12,2017</h5>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend,
            </p>
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-image">
            <img src={firstmeetpic} alt="dummypic" />
          </div>
        </div>

        <div className="content-container">
          <div className="content-image-slideshow">
            <img src={firstdatepic} alt="dummypic" />
            <img src={firstdatepic1} alt="dummypic" />
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-text">
            <h3>First Date</h3>
            <h5>Feb 12,2017</h5>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend,
            </p>
          </div>
        </div>

        <div className="content-container">
          <div className="content-text">
            <h3>Proposal</h3>
            <h5>April 12,2017</h5>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend,
            </p>
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-image">
            <img src={proposalpic} alt="dummypic" style={{ width: "30vw" }} />
          </div>
        </div>

        <div className="content-container">
          <div className="content-image-slideshow">
            <img src={firstdatepic} alt="dummypic" />
            <img src={firstdatepic1} alt="dummypic" />
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-text">
            <h3>Engagement</h3>
            <h5>Feb 12,2017</h5>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
