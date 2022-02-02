import React from "react";
import Video from "./../Assets/Video.mp4";
import {Link} from 'react-router-dom';
import Button from "./../Components/Button";

const Accueil = () => {
  //pas sûr de l'utiliser
  // const ref = useRef();

  // useEffect(() => {});

  const style = {
      // width: Dimension.get('window').width,
      // height: Dimension.get('window').height
      width : "1000px",
      height : "1600px"
  }
  //la balise <video>
  //https://developer.mozilla.org/fr/docs/Web/HTML/Element/video

  return (
    <div className="accueil-container">
      
      <video  width="1620" height="2160" autoPlay muted loop >
        <source src={Video} type="video/mp4" />
      </video>
      
      
        {/* <Link to='/question'>to question page</Link> */}
      
    </div>
  );
};

export default Accueil;
