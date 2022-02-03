import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Original from "./Pages/Original";
import ReponseVocal from "./Pages/ReponseVocal";
import ReponseEcrit from "./Pages/ReponseEcrit";
import Remerciement from "./Pages/Remerciement";
import "./Styles/Global.css"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/original" element={<Original/>} />
        <Route path="/reponseVocal" element={<ReponseVocal/>} />
        <Route path="/reponseEcrit" element={<ReponseEcrit/>} />
        <Route path="/remerciement" element={<Remerciement/>} />
      </Routes>
    </>
  );
}

export default App;
