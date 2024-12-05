import { useReducer, useState } from "react"

const reducerFunction=(state,action)=>{
    switch(action.type){
        case "AGE_CHANGE":
            return {...state,age:state.age+1}
        case "NAME":
            return {...state,username:[...state.username,action.payload]}
    }
}


export const UseReducers=()=>{
    const [name,setname]=useState("")



    const intialisation={
        username:['vamahi','chinna'],
        age:20
    }

    const [currentState,dispatch]=useReducer(reducerFunction,intialisation)

    const clickHandler=()=>{
        dispatch({
            type:"AGE_CHANGE",
            payload:1
        })
    }

        const changeHandler =(event)=>{

            setname(event.target.value)
        }
    const change=()=>{

        
        dispatch({
            type:"NAME",
            payload:name
        })
        setname("")
    }

    return(
      <>
        <h1>hello vamshi</h1>
        <input type="text" value={name} onChange={changeHandler} />
        <button onClick={change}>click</button>
        <h3>{currentState.username}</h3>
        <h3>age is {currentState.age}</h3>
        <button onClick={clickHandler}>click</button>
      </>

    )
}