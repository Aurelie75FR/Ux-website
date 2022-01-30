import React from 'react';
import { Link } from 'react-router-dom';

function ReponseEcrit() {
  return <>
  <h1>Votre optinion compte</h1>
      <textarea name="reponse" id="reponse" cols="30" rows="10"></textarea>
      <Link to="/remerciement">Envoyer</Link>
  </>;
}

export default ReponseEcrit;
