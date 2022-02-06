import React from "react";
import Video from "./../Assets/Video.mp4";
import { Link } from "react-router-dom";

const Accueil = () => {

  return (
    <div className="accueil-container">
      <Link className="overlayLink" to="/original">
        <video className="video" id="video" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>

        <p className="touchscreen">
          Touche l'écran pour <br />
          nous partager <br />
          ce qui te rend original.e
          <br />
          <br />
          Touch the screen <br />
          to share your originality.
        </p>
        <div className="touch"></div>
      </Link>
    </div>
  );
};

export default Accueil;
