import { useState } from "react";



export const Countchange=()=>{
    const [age,setage]=useState(10)
    const [even,seteven]=useState("")
    const ageHandler=(type)=>{
        if(age%2==0){
            // setage(age+1)
            seteven("odd")
        }
        else{
            seteven("even")
        }
        switch(type){
            case "INCREASE":
                setage(age=>age+1)

            // setInterval(() => {
            //     setage(age=>age+1)
            // },1000);
            break;
            case "DECREASE":
                if(age>0){
                    setage(age-1)
                }
                else{
                    alert("age can't be in negative")
                }
                break;
            case " RESET":
                setage(age*0)
                break;
            default:
                break;
        }
    }
    const evenOdd=()=>{
       
    }
    return(
        <> 
               <h1>changing the age</h1>
               <h3>current age is {age}</h3>
               <button onClick={()=>ageHandler("INCREASE")}>Increase age</button>
               <button onClick={()=>ageHandler("DECREASE")}>Decrease age</button>
               <button onClick={()=>ageHandler(" RESET")}>reset</button>
                <h3>the age is the {`${age} is ${even}`} number</h3>
                <button onClick={evenOdd}>changeHandler</button>

        </>

        
    )
}




















 // const ageHandler=()=>{
    //     setage(age+1)
    // }
    // const decreaseAge=()=>{
    //     if(age>0){
    //         setage(age-1)
    //     }else{
    //         alert("age can't negative")
    //     }
    // }
    // const resetHandler=()=>{
    //     setage(0)
    // }