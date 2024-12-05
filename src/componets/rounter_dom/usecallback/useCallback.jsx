import { useCallback, useState } from "react"
import  CustomButton  from "../../button/button"
import Secondhead from "../../headings/head"

import BootstrapCards from "../../bootstrap/custom-card"

const UseCallbackex=()=>{

    const [toggle,setToggle]=useState(false)
    const [age,setAge]=useState(10)
    const [todo,setTodo]=useState(["vamshih"])

    const changeHandler= useCallback (()=>{
        const add=["vamshi chinna"]
        console.log(add,[...todo])
       const update=[add,[...todo]]
        setTodo(update)
    },[todo])

    const tagoleHandler= useCallback (()=>{
        // console.log("toggle.............");
        
        setToggle(!toggle)
    },[toggle])

    const ageHandler= useCallback(()=>{
        // console.log("age................")
        setAge(age+2)
    },[age])

    return(
        <>
        
        <Secondhead text="hello every one"/>
        <Secondhead text={age} />
        <h1>{age}</h1>
        {
            toggle ? <h1>wellcome to page</h1>: <h1>Please login</h1>
        }
        <CustomButton  text="click" Onpress={tagoleHandler}/>
        <CustomButton  text="age" Onpress={ageHandler}/>
        <CustomButton  text="todo" Onpress={changeHandler}/>

     
       <h1>{todo}</h1>    
      
     
       
        </>
    )
}
export default UseCallbackex