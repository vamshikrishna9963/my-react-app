import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Userdata } from "./navigation_stack"
import { Global1 } from "../usememo/usememo2"
// import { useContext } from "react"

export const Products=()=>{

    const {user}=useContext(Userdata)
    const [data,setproducts]=useState([])

    // const salHandler=useContext(Global1)

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        try{
            const response=await axios.get("https://fakestoreapi.com/products") 
        if(response.status===200){
            setproducts(response.data)
        }
        }catch(err){
            console.error(err)
        }
    }
    return(
        <>
        <h1>well come to {user}</h1>
        <h1>products</h1>
        {
            data.length>0 && <>
            
            {
                data.map(each=><>

<table >
   

      <tr key={each.id}>
        <td><h5>{each.id}</h5></td>
        <td><img src={each.image} alt="" width={100} /></td>
        <td>{each.title}</td>
        {/* <td>{salHandler}</td> */}
        <td>
        <button><Link to={`${each.id}`}>view more</Link></button>

        </td>
      </tr>
      
    
  </table>

                
                </>)
            }
            
            </>
        }
        </>
    )
}