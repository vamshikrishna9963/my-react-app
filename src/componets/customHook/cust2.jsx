import { useCallback, useEffect, useState } from "react"



const useCounter=() =>{

    const [increase,setIncrease]=useState(0)

    
    
    const increaseHandlers=useCallback(()=>{
        setIncrease(increase+1)
    },[increase])
    const decreamentHandlers=useCallback(()=>{

        if(increase > 0){
            setIncrease(increase-1)

        }
    },[increase])
    const resetHand=useCallback(()=>{
        setIncrease(0)
    },[increase])

    return [increase,increaseHandlers,decreamentHandlers,resetHand]
}

export default useCounter