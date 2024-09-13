import { json } from "react-router-dom"

export const Button=(props)=>{
    const {text="Button",Onpress=()=>{},bgcolor="green"}=props
   const mypress=()=>{
        Onpress({name:"vamshi",salary:30000})
    }
    return(<>
        <button style={{backgroundColor:bgcolor}} onClick={Onpress}>{text}</button>
        {/* <button onClick={mypress}></button> */}
        </>
    )
}