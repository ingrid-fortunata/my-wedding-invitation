import React from "react";
import "./Events.css";
import textdecor from "../../Assets/textdecor.png";
import vihara from "../../Assets/vihara.PNG";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";
import teapai from "../../Assets/teapai.jpg";
import reception from "../../Assets/reception.jpg";

export default function Events() {
  return (
    <div className="events-container">
      <div className="events-main-title">
        <img src={textdecor} alt="textdecor" />
        <div className="events-maintitle-text">Wedding Events</div>
      </div>

      <div className="events-maincontainer">
        <div className="events-container-container">
          <div className="events-image">
            <img src={vihara} alt="dummypic" />
          </div>
          <div className="events-text">
            <h3>Holy Matrimony</h3>
            <div style={{ display: "flex" }}>
              <IoMdPin
                size={30}
                style={{
                  //   marginTop: "1.7%",
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>
                Pusdiklat Buddhis Maitreyawira, Jalan Taman Duta Mas No.5,
                Jelambar Baru, West Jakarta
              </h5>
            </div>
            <div style={{ display: "flex" }}>
              <AiOutlineClockCircle
                size={30}
                style={{
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>Sept 18 2021, 11.00 AM - 12.00 AM</h5>
            </div>
            <p>
              The Holy Matrimony will be held in accordance with the procession
              of the Maitreya Buddha's religion. Due to Covid-19 situation and
              the government's policy, this ceremony will be held privately by{" "}
              <b>main family and witnesses only</b>.
            </p>
            <a href="https://www.google.com/maps/place/Pusdiklat+Buddhis+Maitreyawira/@-6.1498392,106.7811231,21z/data=!4m12!1m6!3m5!1s0x2e69f630f5c62ac9:0x523bd00db672e92!2sFortunate+Coffee+Duta+Mas!8m2!3d-6.1498054!4d106.7809785!3m4!1s0x2e69f6308cf09397:0x29c82347a7d18403!8m2!3d-6.1498026!4d106.7811716">
              See location on GMaps (click here)
            </a>
          </div>
        </div>

        <div className="events-container-container">
          <div className="events-image">
            <img src={teapai} alt="dummypic" style={{ width: "50vw" }} />
          </div>
          <div className="events-text">
            <h3>Tea Pai</h3>
            <div style={{ display: "flex" }}>
              <IoMdPin
                size={30}
                style={{
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>
                Menara Peninsula Hotel, Letjen S. Parman Kav. 78, West Jakarta
              </h5>
            </div>
            <div style={{ display: "flex" }}>
              <AiOutlineClockCircle
                size={30}
                style={{
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>Sept 18 2021, 02.00 PM - Done</h5>
            </div>
            <p>
              We will held the Tea Pai Ceremony at Menara Peninsula Hotel. We
              hope that the{" "}
              <b>senior members of the bride and groom's extended families</b>{" "}
              will come to attend this event. Please book your seat at RSVP
              button.
            </p>
            <a href="https://www.google.com/maps/place/Menara+Peninsula+Hotel/@-6.18981,106.7978153,15z/data=!4m18!1m9!3m8!1s0x0:0x42673f42331585b6!2sMenara+Peninsula+Hotel!5m2!4m1!1i2!8m2!3d-6.18981!4d106.7978153!3m7!1s0x0:0x42673f42331585b6!5m2!4m1!1i2!8m2!3d-6.18981!4d106.7978153?hl=en">
              See location on GMaps (click here)
            </a>
          </div>
        </div>

        <div className="events-container-container">
          <div className="events-image">
            <img src={reception} alt="dummypic" />
          </div>
          <div className="events-text">
            <h3>Wedding Reception</h3>
            <div style={{ display: "flex" }}>
              <IoMdPin
                size={30}
                style={{
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>
                Menara Peninsula Hotel, Letjen S. Parman Kav. 78, West Jakarta
              </h5>
            </div>
            <div style={{ display: "flex" }}>
              <AiOutlineClockCircle
                size={30}
                style={{
                  width: "3vw",
                  color: "goldenrod",
                }}
              />
              <h5>Sept 18 2021, 04.30 PM - Done</h5>
            </div>
            <p>
              A wedding party isn't completed yet without reception (and
              documented by photos of course!) that being attended by all the
              bride and groom's beloved big families & friends! Come and join us
              in <b>seating dinner party</b> at Menara Peninsula Hotel to
              celebrate our love! <br /> Please reserved your seat at RSVP
              button.
            </p>
            <a href="https://www.google.com/maps/place/Menara+Peninsula+Hotel/@-6.18981,106.7978153,15z/data=!4m18!1m9!3m8!1s0x0:0x42673f42331585b6!2sMenara+Peninsula+Hotel!5m2!4m1!1i2!8m2!3d-6.18981!4d106.7978153!3m7!1s0x0:0x42673f42331585b6!5m2!4m1!1i2!8m2!3d-6.18981!4d106.7978153?hl=en">
              See location on GMaps (click here)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
