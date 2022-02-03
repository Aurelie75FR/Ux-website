import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mic from "../Assets/Mic.svg";
import Keys from "../Assets/Keys.svg";
import "./../Styles/Vocal.css";

function Reponses() {
  const [isActive, setIsActive] = useState("false");
  const [inputVocalIsActive, setInputVocalIsActive] = useState("false");
  const [inputEcritIsActive, setInputEcritIsActive] = useState("false");

  const navigateReponses = useNavigate();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleVocalInput = () => {
    setInputVocalIsActive(!inputVocalIsActive);
  };
  const toggleEcritInput = () => {
    setInputEcritIsActive(!inputEcritIsActive);
  };

  const handleClick = () => {
    navigateReponses("/remerciement");
  };

  useEffect(() => {
    setTimeout(() => {
      navigateReponses("/");
    }, 180000);
    return clearTimeout() //3 minutes
  }, [navigateReponses]);
  console.log(navigateReponses);

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

      <div className="buttons" style={inputVocalIsActive && inputEcritIsActive ? {display: "flex"} : {display: "none"}}>
        <div className="touch">
          <img  src={Mic} alt="micro" className="micro"  onClick={toggleVocalInput} />
        </div>
        <div className="touch">
          <img  src={Keys} alt="Keyboard" className="keyboard" onClick={toggleEcritInput} />
        </div>
      </div>

      <div className="reponse-vocale" style={inputVocalIsActive? {display: "none"} : {display: "flex"}}>
        <div className="recordOrNext">
          <div className="socket">
            <div
              className={isActive ? "button" : "button active"}
              onClick={!isActive ? handleClick : handleToggle}
            ></div>
          </div>
        </div>
        <p className="touchtotalk">Touch & talk / Touchez & parlez</p>
      </div>

      <div className="reponse-ecrite"  style={inputEcritIsActive? {display: "none"} : {display: "flex"}} >
        <textarea className="textArea" cols="30" rows="10"></textarea>
        <Link className="envoyer" to="/remerciement">
          Send/Envoyer
        </Link>
      </div>
    </>
  );
}

export default Reponses;
