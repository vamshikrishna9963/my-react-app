import { useEffect, useState } from "react"



export const UseEffect_Dom=()=>{
    const[data,setdata]=useState({
        xposition:0,
        yposition:0,

    })
    const addEvent=(event)=>{
        const {offsetX,offsetY}=event
            setdata({...data,xposition:offsetX,yposition:offsetY})
            console.log(offsetX)
    }
    useEffect((e)=>{
        document.title="dom manuplations"
        window.addEventListener("mouseover",addEvent)
        //     console.log(event)
        return()=>{
            window.removeEventListener("mouseover",addEvent)
        }
      
      
    },[])

    return(
       <div>
         <h1>well come to page</h1>
         <h2>X position={data.xposition}</h2>
         <h2>y position={data.yposition}</h2>

       </div>
    )
}
  
