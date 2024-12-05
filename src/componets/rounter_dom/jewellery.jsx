import axios from "axios"
import { useEffect, useState } from "react"






export const Jewellery=()=>{

    const [data,setdata]=useState([])

    useEffect(()=>{
            fechData()
    },[])
      
    const fechData=async()=>{
       try{
        const response=await axios.get("https://fakestoreapi.com/products/category/jewelery")
        console.log(response)
        if(response.status===200){
            setdata(response.data)
        }
       }catch(err){
        console.error(err)
       }
    }

    return(
        <>
        <h1>jewellery</h1>
        {
                data.map(each=><>
                <pre>
                    {/* {JSON.stringify(each)} */}
                </pre>
                    <h1>{each.title}</h1>
                </>)
        }
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi distinctio maxime veniam rerum molestiae quaerat totam iure eos illum? Eaque aliquam vel rem nostrum quis exercitationem perferendis similique dolorum quidem.
        </>
    )
}