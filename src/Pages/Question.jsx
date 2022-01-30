import React from "react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <div className="question-container">
      <p>Etes vous Originals ?</p>
      <Link to="/reponseVocal">Vocal</Link>
      <Link to="/reponseEcrit">Ecrit</Link>
    </div>
  );
}

export default Question;
