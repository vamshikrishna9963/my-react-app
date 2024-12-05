//  import "./App.css"
 
 import React from "react";
 
 export const Secondhead=(props)=>{
    console.log("heading/..................");

    const {text}=props
    return(
        <h2 style={{color:"red"}}>{text}</h2>
    )
}
export default React.memo( Secondhead)

export const Mainhead=(props)=>{
    const {Headings,children}=props
    
    return(
        <>
          {children}
        <h1 >{Headings}</h1>
      
        </>
    )
}

