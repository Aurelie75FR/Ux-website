import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import start from "../Assets/start.png"
import stop from "../Assets/stop.png"
import mic from "../Assets/mic.png"
// import Countdown from './../Components/Countdown';

function ReponseVocal() {

  const navigate = useNavigate();

  //peut-être ajouter une animation pendant le record
  // ou un timer ¯\_(ツ)_/¯
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, []);

  return (
    <>
    <div className="content-question">
      <h1 className="question">
        ET TOI, QU’EST CE QUI <br />
        TE REND ORIGINAL.E ?
      </h1>
      <h1 className="question">
        AND YOU, WHAT <br />
        MAKES YOU ORIGINAL ?
      </h1>
    </div>
      <div className="recordOrNext">
      <div className="touch">
        <img src={start} alt="Enregistrer" />
      </div>
      {/* <Countdown />  */} 
      <div className="touch">
        <Link to="/remerciement"><img src={stop} alt="stop" /></Link>
      </div>
      </div>
    </>
  );
}

export default ReponseVocal;
