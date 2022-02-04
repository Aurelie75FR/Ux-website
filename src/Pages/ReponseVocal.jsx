import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mic from "../Assets/Mic.svg";
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

  useEffect(() => {
    const vocalTimeOut = setTimeout(() => {
      navigate2("/");
    }, 180000);
    return () => {
      clearTimeout(vocalTimeOut);
    };
  }, [navigate2]);
  console.log(navigate2);
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
      <img className="micro" src={Mic} alt="Micro" />
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
