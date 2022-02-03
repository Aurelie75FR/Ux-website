import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Keys from "../Assets/Keys.svg";
import Mic from "../Assets/Mic.svg";

function Question() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, [navigate]);
  console.log(navigate);
  return (
    <div>
      <div className="content">
        <h1 className="head">
          ORIGINAL ET POUR
          <br />
          TOUJOURS
        </h1>
        <p className="text">
          Les tendances d’aujourd’hui, c’est le style <br />
          que nous avons toujours incarné.
          <br />
          C’est notre histoire, ça l’a toujours été.
          <br />
          C’est always Original, tout simplement.
        </p>
        <h1 className="head">
          <br />
          ALWAYS BEEN <br />
          ALWAYS ORIGINAL
        </h1>
        <p className="text">
          The headlines of today are the stories <br />
          once thought impossible. We’ve been writing <br />
          since forever. Because we’ve always <br />
          been possible. This is Always Original.
        </p>
      </div>
      <div className="buttons">
        <Link to="/reponses">
          <div className="touch">
            {/* <Link to="/reponseVocal">
          <img src={Mic} alt="micro" />
        </Link>
        </div>
        <div className="touch">
        <Link to="/reponseEcrit">
          <img src={Keys} className ="clavier" alt="clavier" />
        </Link> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Question;
