import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Mic from "../Assets/Mic.svg";
import "./../Styles/Vocal.css";

function ReponseVocal() {
  const [isActive, setIsActive] = useState("false");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    navigate("/remerciement");
  };
  const navigate = useNavigate();

  //peut-être ajouter une animation pendant le record
  // ou un timer ¯\_(ツ)_/¯
  // si isActive = next page
  // else !isActive = setTimeOut navigate = 3min
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000);
  }, [navigate]);
   //3 minutes setTimeOut homepage

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
      {/* <img src={Mic} id="microAnswer" alt="micro" /> */}
        <div className="socket">
          <div
            className={isActive ? "button" : "button active"}
            onClick={!isActive ? handleClick : handleToggle}
          ></div>
        </div>
        {/* <div className="touch">
          <img src={start} alt="Enregistrer" />
        </div>
        <div className="touch">
          <Link to="/remerciement">
            <img src={stop} alt="stop" />
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default ReponseVocal;
