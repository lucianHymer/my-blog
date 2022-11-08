import { useState } from "react";
import "./App.css";
import background from "./assets/utopia.jpg";
import backgroundTop from "./assets/top.png";
import backgroundBottom from "./assets/bottom.png";
import backgroundBottomShorter from "./assets/shorter.png";

import Bio from "./components/Bio";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(true)} className={`App`}>
      <div className="scrollBox">
        <div className={`enterTip ${open ? "is-hidden" : ""}`}>
          <p>Tap Anywhere to Enter</p>
        </div>
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
        <div className={`flexSpaceEvenly contents ${open ? "is-visible" : ""}`}>
          <Bio />
        </div>
        <div className="scrollPadding"></div>
        <img
          className={`background fade-in-bottom-shorter ${
            open ? "is-visible" : ""
          }`}
          src={backgroundBottomShorter}
        />
        <div className="artRef">
          Original Artwork: Utopia City 2080 by Reinventing Society / Damian
          Krzywonos, CC BY-NC-SA 4.0
        </div>
      </div>
    </div>
  );
}

export default App;
