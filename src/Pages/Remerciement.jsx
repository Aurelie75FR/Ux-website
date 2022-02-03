import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Remerciement() {
  const navigate3 = useNavigate();
  useEffect(() => {
    const timeOut3 = setTimeout(() => {
      navigate3("/");
    }, 4000);
    console.log(timeOut3); // 4 secondes
    return () => clearTimeout(timeOut3, "remerciement timed out");
  }, [navigate3]);
  console.log(navigate3)

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
