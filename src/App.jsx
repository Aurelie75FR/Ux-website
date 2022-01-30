import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Question from "./Pages/Question";
import Reponse from "./Pages/Reponse";
import Remerciement from "./Pages/Remerciement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Accueil} />
        <Route path="/question" element={Question} />
        <Route path="/reponse" element={Reponse} />
        <Route path="/remerciement" element={Remerciement} />
      </Routes>
    </>
  );
}

export default App;
