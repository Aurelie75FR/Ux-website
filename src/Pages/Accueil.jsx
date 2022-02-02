import React from "react";
import Video from "./../Assets/Video.mp4";
import { Link } from "react-router-dom";
import Button from "./../Components/Button";

const Accueil = () => {
  //pas sûr de l'utiliser
  // const ref = useRef();

  // useEffect(() => {});

  //la balise <video>
  //https://developer.mozilla.org/fr/docs/Web/HTML/Element/video

  return (
    <div className="accueil-container">
      <Link className="overlayLink" to='/question'>
      <video className="video" id="video" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>

      <p className="touchscreen">
        Touche l'écran pour nous partager ce qui te rends original·e
        <br></br>
        <br></br>
        Touch the screen to share your originality
      </p>
      </Link>
    </div>
  );
};

export default Accueil;
