import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Mic from "../Assets/Mic.svg";
import "./../Styles/Vocal.css";

function ReponseVocal() {
  const [isActive, setIsActive] = useState("false");
  const navigate2 = useNavigate();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    navigate2("/remerciement");
  };
  

  //peut-être ajouter une animation pendant le record
  // ou un timer ¯\_(ツ)_/¯
  // si isActive = next page
  // else !isActive = setTimeOut navigate = 3min
  useEffect(() => {
    setTimeout(() => {
      navigate2("/");
    }, 180000);
  }, [navigate2]);
  console.log(navigate2)
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
        <div className="socket">
          <div
            className={isActive ? "button" : "button active"}
            onClick={!isActive ? handleClick : handleToggle}
          ></div>
        </div>
      </div>
      <p className="touchtotalk">Touch & talk / Touchez & parlez</p>
    </>
  );
}

export default ReponseVocal;
