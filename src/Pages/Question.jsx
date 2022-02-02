import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Question() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, []);
  return (
    <div className="question-container">
      <p>Etes vous Originals ?</p>
      <Link to="/reponseVocal">Vocal</Link>
      <Link to="/reponseEcrit">Ecrit</Link>
    </div>
  );
}

export default Question;
