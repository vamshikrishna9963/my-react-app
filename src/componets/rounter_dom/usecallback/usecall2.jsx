import { useCallback, useState } from "react"
import  CustomButton from "../../button/button"



export const UseCall=()=>{
    const [age,setAge]=useState(10)
    const [change,setChagne]=useState(false)
    const clickHandler= useCallback(()=>{
        console.log("age............")
        setAge(age+1)
    },[age])

    const changeHandler= useCallback(()=>{
        console.log("change............")

        setChagne(!change)
    },[change])
    return(
        <>
        <h1>well come to usecallback example</h1>
        <h2>the age is {age}</h2>
        {
            change ? <h2>"wellcome to page"</h2> :<h2>"Please login "</h2>
        }
        <CustomButton text={"age"} onPress={clickHandler}/>
        <CustomButton text={"change"} onPress={changeHandler}/>
        
        </>
    )
}