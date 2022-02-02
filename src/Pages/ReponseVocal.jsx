import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Countdown from './../Components/Countdown';

function ReponseVocal() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 180000); //3 minutes
  }, []);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const handler = () => {
  //   setIsPlaying(true)
  // }
  return <>
    <button >Start recording</button>
    {/* <Countdown />  */}
    <button>
    <Link to='/remerciement'>Stop recording</Link>
    </button>
      
  </>;
}

export default ReponseVocal;

