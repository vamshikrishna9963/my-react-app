import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Userdata } from "./navigation_stack"



export const Electronics=()=>{
    const [data,setdata]=useState([])

    const {salary,user}=useContext(Userdata)


    useEffect(()=>{
        fectchData()
    },[])
    const fectchData=async()=>{
        try{
        let response=await axios.get("https://fakestoreapi.com/products/category/electronics")
        console.log(response)
        if(response.status===200){
            setdata(response.data)
            // return response.data
            // console.log(response.data)
        }
    }
    catch(err){
        console.error(err)
        
    }
    }
    return(
        <div>
            <h2>hello {user} your salry is {salary}</h2>
        <h1>Electronics</h1>
        {
            
                data.map(each=>
                    <>
                    {/* <h1>{each.id}</h1> */}
                 
                    <pre>
                    {JSON.stringify(each)}
                    <h2>{each.id}</h2>
                    </pre>
                   
                    </>
                )
                
            
               
            }
        
        </div>
    )
}