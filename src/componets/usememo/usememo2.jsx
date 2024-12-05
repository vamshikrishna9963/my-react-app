import { createContext, useMemo, useState } from "react"

export const Global1=createContext()

function Usememohook(){

    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(0)
    
    const salHandler=useMemo( ()=>{
        console.log("salary executed..................")
        const sal=200
        return sal * salary
    },[salary])

    const salSet=()=>{
        setSalary(salary+1)
    }
    const multiHand=useMemo(()=>{
        const multi=200
        return multi * age
    },[age])
    const gstHand=useMemo(()=>{
        const multi=multiHand

        const gst=12.6
        return  multi * gst /100
    })

    const offerHand=useMemo(()=>{
        const gst=gstHand
        const mul=multiHand
        return gst+mul
    })
    
    const increamentHandler=()=>{
        console.log("increament..........")
        setAge(age+1)

    }

    const decreamentHandler=()=>{
        console.log("decreament..........")
            
        setAge(age <= 0 ? 0 : age-1)
    }



    return(
        
        <Global1.Provider value={{
                age,
                salary,
                salHandler

        }}>
       <h1>the each ticket is $200</h1>
        <button onClick={increamentHandler}>+</button>
        <b>   {age} </b>

        <button onClick={decreamentHandler}>-</button>
        <h2>the salary is {multiHand}</h2>
        <h2>GST is.......... {gstHand}</h2>
        <h2>total ........... {offerHand}</h2>

        <h2>the salary is {salary} Amount {salHandler}</h2>
        <button onClick={salSet}>click for salary</button>
        </Global1.Provider>
        
    )
}
export default Usememohook