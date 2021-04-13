import React from "react";
import "./Gallery.css";
import textdecor from "../../Assets/textdecor.png";
import Gallery from "react-photo-gallery";
import galleryimg1 from "../../Assets/Gallery/galleryimg1.jpg";
import galleryimg2 from "../../Assets/Gallery/galleryimg2.jpg";
import galleryimg3 from "../../Assets/Gallery/galleryimg3.jpg";
import galleryimg4 from "../../Assets/Gallery/galleryimg4.jpg";
import galleryimg5 from "../../Assets/Gallery/galleryimg5.jpg";

export default function Gallery2() {
  const PHOTO_SET = [
    {
      src: galleryimg1,
      width: 2,
      height: 3,
    },
    {
      src: galleryimg2,
      width: 4,
      height: 2,
    },
    {
      src: galleryimg3,
      width: 4,
      height: 2,
    },
    {
      src: galleryimg4,
      width: 4,
      height: 2,
    },
    {
      src: galleryimg5,
      width: 4,
      height: 2,
    },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-main-title">
        <img src={textdecor} alt="textdecor" />
        <div className="gallery-maintitle-text">Our Gallery</div>
      </div>

      {/* <img src={galleryimg1} /> */}

      <Gallery photos={PHOTO_SET} columns={2} direction="column" />
    </div>
  );
}
