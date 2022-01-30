import React from 'react';
import { Link } from 'react-router-dom';

function ReponseVocal() {
  return <>
    <button>Start recording</button>
    <button>
    <Link to='/remerciement'>Stop recording</Link>
    </button>
    
  </>;
}

export default ReponseVocal;

