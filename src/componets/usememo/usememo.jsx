import {  useState } from "react"

import { useMemo } from "react"


export const UsememoEx=()=>{

    const [milk,setMilk]=useState(1)
    const [rice,setRice]=useState(1)

    const milkPrice=useMemo(()=>{
        console.log("milk executed........");
        
        const priceOfmilk = 50
        return  priceOfmilk * milk 

    },[milk])
    const ricePrice=useMemo(()=>{
        console.log("rice executed........");

        const priceOfrice=300
        return   priceOfrice * rice
    },[rice])
    
    const milkHandler=()=>{

        setMilk(milk+1)

    }
    const riceHandler=()=>{
        setRice(rice+1)
    }
    
    return(
        <>
        <h1>hello</h1>
        <h2>quantity {milk} price {milkPrice} </h2>
        <h2>quantity {rice} price {ricePrice}</h2>
       <button onClick={milkHandler}> change</button>
       <button onClick={riceHandler}> change</button>

        </>
    )
}