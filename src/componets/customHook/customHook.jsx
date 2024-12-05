import axios from "axios"
import { useEffect, useState } from "react"




const useAxios=(url="")=>{

    const[data,setData]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
      

            fetchdata()
        
    },[])
    const fetchdata=async()=>{
        try{
         const response=await axios.get(url)
         if(response.status===200){
             setData(response.data)
            //  console.log(response.data)
         }
        }catch(err){
         setError(err)

        }finally{
            setLoading(false)
        }
    }
    return [data,error,loading]
}
export default useAxios