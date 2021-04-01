import "./App.css";
import CelebratingBanner from "./Components/CelebratingBanner/CelebratingBanner";
import Countdown from "./Components/Countdown/Countdown";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar2 from "./Components/Navbar/Navbar";
import CoupleIndex from "./Pages/Couple/CoupleIndex";
import Events from "./Pages/Events/Events";
import Timeline from "./Pages/Timeline/Timeline";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Navbar2 />
      <CoupleIndex />
      <Countdown />
      <Timeline />
      <CelebratingBanner />
      <Events />
    </div>
  );
}

export default App;
