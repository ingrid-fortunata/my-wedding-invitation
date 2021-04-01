import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyperson from "../../../Assets/GroomsFamily/dummyperson.jpg";

function GroomsFamily() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={dummyperson} alt="dummyperson" />
          </div>
          <div className="details">
            <h2>
              Tumijan <span className="job-title">Groom's beloved Pops</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={dummyperson} alt="dummyperson" />
          </div>
          <div className="details">
            <h2>
              Idayati Saidin{" "}
              <span className="job-title">Groom's beloved Mom</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={dummyperson} alt="dummyperson" />
          </div>
          <div className="details">
            <h2>
              Tommy <span className="job-title">Groom's Calm Big Bro</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src={dummyperson} alt="dummyperson" />
          </div>
          <div className="details">
            <h2>
              Reynardo
              <span className="job-title">Groom's Dependable Lil Bro</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default GroomsFamily;
