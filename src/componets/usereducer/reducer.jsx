import { useReducer, useState } from "react"



const reducerFunction=(state,action)=>{
        switch(action.type){
            case "INCREASE":
                return {...state,age:state.age+1}
            case "CHANGE_NAME":
                return {...state,username:[...state.action.payload]}
            case "DELETE":
                return {...state,username:action.payload}
        }
}

export const Usereducer=()=>{

    const intialiton={
        username:[],
        age:20
    }

    

    const[currentState,dispatch]=useReducer(reducerFunction,intialiton)
    const[name,setname]=useState("")

    const nameHandler=(event)=>{
        setname(event.target.value)
    }
    const onsubmit=()=>{
        if(name){
            dispatch({
                type:"CHANGE_NAME",
                payload:name
            })
        }
        setname("")
    }
    const ageHandler=()=>{
        dispatch({
            type:"INCREASE",
            payload:1
        })
    }
    const deleteHandler=()=>{
        dispatch({
            type:"DELETE",
            payload:""
        })
    }
    return(
        <>
        <h1>Create a Usereducer </h1>
        <input type="text"  value={name} onChange={nameHandler}/>
        {
            currentState.name.map(each=><>
            <h1>{each.name}</h1>
            </>)
        }
        <button onClick={onsubmit}>submit</button>
        <button onClick={deleteHandler}>delete</button>
        <h2>{currentState.username}</h2>
        <h3>age {currentState.age}</h3>
        <button onClick={ageHandler}>Increase</button>
        </>
    )
}