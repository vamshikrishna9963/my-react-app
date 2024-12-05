import { useEffect, useRef, useState } from "react"




export const UseRefEaxmple=()=>{
    const [data,setdata]=useState(1000)
    const reference=useRef(0)
    useEffect(()=>{
        reference.current=data

    },[data])
    const changeHandler=()=>{
        setdata(data+1000)
    }
    return(
        <>
        <h1>useState change {data}</h1>
        <h1>reference value {reference.current}</h1>
        <button onClick={changeHandler}>Click to change</button>
        </>        
    )
}