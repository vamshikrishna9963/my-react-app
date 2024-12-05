import axios from "axios"
import { useEffect, useState } from "react"



const PromisEx=()=>{
    const [data,setData]=useState([])
    
    useEffect(()=>{
         
        const fechData=async()=>{

            const res1= await Promise.race ([axios.get("https://fakestoreapi.com/products?_sort=-id&limit=3"), axios.get("https://fakestoreapi.com/products")])
            console.log(res1);
            
            // const res1=await axios.get("https://fakestoreapi.com/products")
            // const res2=await axios.get("https://fakestoreapi.com/products?_sort=-id&limit=2")
             // console.log(res1)
            // console.log(res2.data,res1.data);
            
        }
        fechData()
    },[])
    return(
        <>
        <h1>hello..........</h1>
        </>
    )
}
export default PromisEx