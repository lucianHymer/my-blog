import { useState } from "react";
import "./App.css";
import background from "./assets/utopia.jpg";
import backgroundTop from "./assets/top.png";
import backgroundBottom from "./assets/bottom.png";
import backgroundBottomShorter from "./assets/shorter.png";
import headshot from "./assets/headshot.png";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseMove={() => setOpen(true)} className={`App`}>
      <div className="scrollBox">
        <img
          className={`background fade-out-bg ${open ? "is-hidden" : ""}`}
          src={background}
        />
        <img
          className={`background fade-out-bottom ${open ? "is-hidden" : ""}`}
          src={backgroundBottom}
        />
        <img
          className={`background fade-in-top ${open ? "is-visible" : ""}`}
          src={backgroundTop}
        />
        <div className={`contents ${open ? "is-visible" : ""}`}>
          <img className="headshot" src={headshot} />
          <div className="card">
            <p>Lucian is a computer engineer and techno-optimist</p>
            <p>More info coming soon...</p>
          </div>
        </div>
        <div className="scrollPadding"></div>
        <img
          className={`background fade-in-bottom-shorter ${
            open ? "is-visible" : ""
          }`}
          src={backgroundBottomShorter}
        />
      </div>
    </div>
  );
}

export default App;
