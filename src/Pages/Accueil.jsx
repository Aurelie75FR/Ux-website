import React, { useEffect, useRef } from "react";
import Video from "./../Assets/Video.mp4";
import Button from "./../Components/Button";

const Accueil = () => {
  //pas sûr de l'utiliser
  const ref = useRef();

  useEffect(() => {});

  //la balise <video>
  //https://developer.mozilla.org/fr/docs/Web/HTML/Element/video

  return (
    <div className="accueil-container">
      <video ref={ref} width={250} autoPlay loop>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Accueil;
