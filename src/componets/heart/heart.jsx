import Heart from "react-animated-heart";
import React, { useState } from "react";


export const InstaHeart=({children})=>{
    const [isClick, setClick] = useState(false);
    return (
      <div className="App">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      {/* <h4>   */}
      {children}
      {/* </h4> */}
      </div>
    );
  
}