import React from "react";
import "./Gallery.css";
import textdecor from "../../Assets/textdecor.png";
import Gallery from "react-photo-gallery";
import galleryimg1 from "../../Assets/Gallery/galleryimg1.jpg";
import galleryimg2 from "../../Assets/Gallery/galleryimg1.jpg";
import galleryimg3 from "../../Assets/Gallery/galleryimg1.jpg";
import galleryimg4 from "../../Assets/Gallery/galleryimg1.jpg";
import galleryimg5 from "../../Assets/Gallery/galleryimg1.jpg";

export default function Gallery2() {
  const PHOTO_SET = [
    {
      src:
        "https://drive.google.com/file/d/1vp85uaXattFRBQ0o_gQeJBZqMofi_4YY/view?usp=sharing",
      width: 3,
      height: 4,
    },
    {
      src: { galleryimg2 },
      width: 4,
      height: 3,
    },
    {
      src: { galleryimg3 },
      width: 4,
      height: 3,
    },
    {
      src: { galleryimg4 },
      width: 4,
      height: 3,
    },
    {
      src: { galleryimg5 },
      width: 4,
      height: 3,
    },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-main-title">
        <img src={textdecor} alt="textdecor" />
        <div className="gallery-maintitle-text">Our Gallery</div>
      </div>

      {/* <img src={galleryimg1} /> */}

      <Gallery photos={PHOTO_SET} />
    </div>
  );
}
