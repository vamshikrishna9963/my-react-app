import { json } from "react-router-dom"
import React from "react"
 const CustomButton=(props)=>{
    console.log("child re-render",props.text)
    const {text="Button",onPress=()=>{},bgcolor="green"}=props
   const mypress=()=>{
        Onpress({name:"vamshi",salary:30000})
    }
    return(<>
        <button style={{backgroundColor:bgcolor}} onClick={onPress}>{text}</button>
        {/* <button onClick={mypress}></button> */}
        </>
    )
}
export default React.memo(CustomButton)