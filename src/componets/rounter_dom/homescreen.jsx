import { useContext, useEffect, useState } from "react"
import { Userdata } from "./navigation_stack"
import useAxios from "../customHook/customHook"
import useCounter from "../customHook/cust2"
import CustomButton from  "../button/button"




export const HomeScreen=()=>{
   
    const {salHandler,salary}=useContext(Userdata)
    const [isonline,setOnline]=useState(navigator.onLine)

    const checkStatus=()=>{
        setOnline(navigator.onLine)
    }
    useEffect(()=>{
        window.addEventListener('onlinechke',checkStatus)
        window.addEventListener('offline',checkStatus)

    },[])
  
    // console.log(error)
    // const clickHandler=()=>{
    //     salHandler()
    // }
    const [increase,increaseHandlers,decreamentHandlers,resetHand]=useCounter()

    // const changeIncrease=()=>{
    //     console.log(increase);
        
    //     return increaseHandlers
    // }
    console.log(increaseHandlers)
   
  const inceaseHandler=()=>{
        salHandler()
    }
    const [datas,error,loading]=useAxios("https://fakestoreapi.com/products")

  
    // console.log(datas);
   
    if(datas){
        console.log(datas)
    }
    if(error){
        console.log("errore")
    }
    if(loading){
        return <h1>loading............</h1>
    }
    return(
       <>
       <h1>{isonline ? "online":"offline"}</h1>
        <h2>{increase}</h2>
        <h3>Salary {salary}</h3>
        <h1>Well come to home screen</h1>
        <button onClick={inceaseHandler}>click</button>
         <CustomButton text={"decreamet"} onPress={increaseHandlers} />

        {/* <button onClick={increaseHandlers }>change</button> */}
         <CustomButton text={"decreamet"} onPress={decreamentHandlers} />

         <CustomButton text={"reset"} onPress={resetHand} />

       </>
    )
}