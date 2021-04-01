import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummyperson from "../../../Assets/GroomsFamily/dummyperson.jpg";

function BridesFamily() {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
              Fortuin Japar{" "}
              <span className="job-title">Bride's strong Daddy</span>
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
              Liauw Mei Fong{" "}
              <span className="job-title">Bride's funky Mommy</span>
            </h2>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default BridesFamily;
