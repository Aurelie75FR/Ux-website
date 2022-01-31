import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import Countdown from './../Components/Countdown';

function ReponseVocal() {
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

