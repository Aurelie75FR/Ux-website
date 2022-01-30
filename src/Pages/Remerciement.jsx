import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Remerciement() {
  //https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
  //+
  //https://stackoverflow.com/questions/63124924/how-to-redirect-to-after-x-seconds-using-react-router-dom
const history = useNavigate()
useEffect(()=>{
  setTimeout(()=>{
    history('/')
  }, 5000) //5 secondes
}, [])
  return <>
      <h1>Merci !</h1>
      <p>Set TimeOut... vers page acceuil</p>
  </>;
}

export default Remerciement;
