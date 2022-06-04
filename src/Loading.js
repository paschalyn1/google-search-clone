import React from 'react';
import { ClipLoader} from "react-spinners";


function Loading () {
  return(
    <div className="flex justify-center items-center">
        < ClipLoader type='Puff' color="#00BFFF" height={550} width={80} />
    </div>
  );
}

export default Loading
