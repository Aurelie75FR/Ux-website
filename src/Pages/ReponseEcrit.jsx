import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ReponseEcrit() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, []);
  return <>
  <h1>Votre optinion compte</h1>
      <textarea name="reponse" id="reponse" cols="30" rows="10"></textarea>
      <Link to="/remerciement">Envoyer</Link>
  </>;
}

export default ReponseEcrit;
