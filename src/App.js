import "./App.css";
import Countdown from "./Components/Countdown/Countdown";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar2 from "./Components/Navbar/Navbar";
import CoupleIndex from "./Pages/Couple/CoupleIndex";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Navbar2 />
      <CoupleIndex />
      <Countdown />
      {/* <h1>tes</h1> */}
    </div>
  );
}

export default App;
