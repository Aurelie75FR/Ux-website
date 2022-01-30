import React, { useEffect, useRef } from "react";
import Video from "./../Assets/Video.mp4";
import {Link} from 'react-router-dom';
import Button from "./../Components/Button";

const Accueil = () => {
  //pas sûr de l'utiliser
  const ref = useRef();

  useEffect(() => {});

  //la balise <video>
  //https://developer.mozilla.org/fr/docs/Web/HTML/Element/video

  return (
    <div className="accueil-container">
      <p>Add background</p>
      <video ref={ref} width="750" autoPlay muted loop >
        <source src={Video} type="video/mp4" />
      </video>
      <br></br>
      
        <Link to='/question'>to question page</Link>
      
    </div>
  );
};

export default Accueil;
