import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




export const Details =()=>{
    const dynamicpar=useParams()
    const [data,setdata]=useState({})
    useEffect(()=>{
        fechdata()
    },[dynamicpar])
    const fechdata=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${dynamicpar.productId}`)
        console.log(response)
        if(response.status===200){
            setdata(response.data)
        }
    }
    return(
            <>
        <h1>details of  product</h1>
            {
                Object.keys(data).length>0 && <>
                <h3>{data.title}</h3>
                <img src={data.image} alt="" width={100}/>
                <p>{data.description}</p>
                </>
            }
            </>
    )
}