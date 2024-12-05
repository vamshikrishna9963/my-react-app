import { useRef, useState } from "react"
export const UserefExample=()=>{
    const reference=useRef(0)
    const [change,setchange]=useState(0)
    const changeOf=()=>{
        reference.current=reference.current+1
        setchange(change+1)
    }
    return(
        <>
        <h1>usestate  {change}</h1>
        <h1>referenceclick  {reference.current}</h1>
        <button onClick={changeOf}>click  </button>
        </>
    )
}
// i have to listen the pending classes in react and problem solving...in the morning i have practive on the form validations in react










// import { useRef, useState } from "react"


// export const Current_refer=()=>{
//     const reference= useRef (0)
//     const [change,setchange]=useState(0)
//     const onclickHandler=()=>{
//         reference.current=reference.current+1
       
//         setchange(change+1)
//         console.log(reference.current)
//     }
    
//     return(
//       <>
//         <h2>{reference.current}</h2>
//         <h2>useState{change}</h2>
//         <button onClick={onclickHandler}>click</button>
//         </>
//     )
// }