import axios from "axios"
import { useEffect, useState } from "react"





const UseEffectExaple=()=>{
    const[data,setdata]=useState([])
    const[type,settype]=useState("products")
    const ChangeHandler=(type)=>{
        settype(type)

    }
    useEffect(()=>{
        document.title="products"
        fechingData()
    },[type])
    const fechingData=async()=>{
        try{
        // const endpoint="carts"
        const {data,status}=await axios.get(`https://fakestoreapi.com/${type}`)
        if(status==200){
            console.log(data)
            setdata(data)
        }
    
    }catch(error){
        console.error(error)
    }
  
  
}
    return(
        <>
            <h1>All product Details</h1>
            {
                ["products","carts","users"].map(each=>    <button onClick={()=>ChangeHandler(each)}>{each}</button>)

                
            }
            {
                data.map(each=>
                    <>
                    {/* {JSON.stringify(each)} */}
                    <pre>
                    {JSON.stringify(each)}

                    </pre>
                    </>
                )
            }
            
            </>
           
            
    )
}
export default UseEffectExaple