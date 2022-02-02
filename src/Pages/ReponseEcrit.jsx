import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import send from "../Assets/send.png"

function ReponseEcrit() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, []);
  return <>
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
    <div className="reponse-ecrite">
      <textarea className='textArea' cols="30" rows="10"></textarea>
      <Link className='envoyer' to="/remerciement">Send/Envoyer<img src={send} alt="envoyer" /></Link>
    </div>
  </>;
}

export default ReponseEcrit;
