import React from "react";
import Video from "./../Assets/Video.mp4";
import { Link } from "react-router-dom";

const Accueil = () => {

  // function toggleFullScreen() {
  //   var doc = window.document;
  //   var docEl = doc.documentElement;
  
  //   var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  //   var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
  //   if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
  //     requestFullScreen.call(docEl);
  //   }
  //   else {
  //     cancelFullScreen.call(doc);
  //   }
  // }

  return (
    <div className="accueil-container">
      <p>hello</p>
      {/* <button id="goFS" onClick={toggleFullScreen}>Go fullscreen</button> */}
      <Link className="overlayLink" to="/original">
        <video className="video" id="video" height={1080} width={810}  autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </video>

        <p className="touchscreen">
          Touche l'écran pour <br />
          nous partager <br />
          ce qui te rends original.e
          <br />
          <br />
          Touch the screen <br />
          to share your originality.
        </p>
        <div className="touch"></div>
      </Link>
    </div>
  );
};

export default Accueil;
