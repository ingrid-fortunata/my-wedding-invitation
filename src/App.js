import "./App.css";
import CelebratingBanner from "./Components/CelebratingBanner/CelebratingBanner";
import Countdown from "./Components/Countdown/Countdown";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar2 from "./Components/Navbar/Navbar";
import CoupleIndex from "./Pages/Couple/CoupleIndex";
import Events from "./Pages/Events/Events";
import Family from "./Pages/Family/Family";
import Footer from "./Pages/Footer/Footer";
import Gallery2 from "./Pages/Gallery/Gallery";
import RSVP from "./Pages/RSVP/RSVP";
import Timeline from "./Pages/Timeline/Timeline";
// import { animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Navbar2 />
      <div className="anchor" id="couple"></div>
      <CoupleIndex />
      <Countdown />
      <div className="anchor" id="story"></div>
      <Timeline />
      <CelebratingBanner />
      <div className="anchor" id="events"></div>
      <Events />
      <div className="anchor" id="family"></div>
      <Family />
      <div className="anchor" id="gallery"></div>
      <Gallery2 />
      <div className="anchor" id="rsvp"></div>
      <RSVP />
      <div style={{ backgroundColor: "goldenrod", height: "15px" }}></div>
      <Footer />
      <div
        style={{
          backgroundColor: "goldenrod",
          fontSize: "1.2em",
          fontWeight: "bold",
          // height: "50px",
          // paddingTop: "0.5em",
        }}
      >
        <center>This website is created by Ingrid & Lucky</center>
      </div>
    </div>
  );
}

export default App;
