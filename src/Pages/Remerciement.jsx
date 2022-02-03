import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Remerciement() {
  //https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
  //+
  //https://stackoverflow.com/questions/63124924/how-to-redirect-to-after-x-seconds-using-react-router-dom
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000); // 6 secondes 
  }, [navigate]);

  return (
    <>
    <div className="content-thanks">
      <h1 className="thanks">
        MERCI D’AVOIR PARTAGÉ <br />
        TA RÉPONSE AVEC NOUS
      </h1>
      <h1 className="thanks">
        THANK YOU FOR SHARING <br />
        THAT WITH US
      </h1>
    </div>
      <p className="endQuote">
        Original et pour toujours. <br />
        Always been Always Original
      </p>
    </>
  );
}

export default Remerciement;
