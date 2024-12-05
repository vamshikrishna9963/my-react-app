import { useState } from "react"
import { Button } from "react-bootstrap"
import { Customtodo } from "./jshelper"
import React from "react"



export const TodoList=()=>{
const [todo,settodo]=useState(Customtodo())
 const todoHandeler=()=>{
    const todolength=todo.length
const myobj={
    id:todolength+1,
    text:`Item ${todolength+1}`
}
 settodo([...todo,myobj])
}
const delteHandler=(targetid)=>{
    const filterid=todo.filter(each=>each.id!==targetid)
    settodo(filterid)
}
const allHandeler=()=>{
 
}

return(
    // <Button o>click one</Button>
    <>
    <h1>Todo List</h1>
    <button onClick={todoHandeler}>Add todo list</button>
    <button onClick={allHandeler}>Delete All</button>

    {
        todo.map((each,ind)=>{
            const {text,id}=each
            return(
                <React.Fragment key={id}>
                <li>{text}</li>
                <button onClick={()=>delteHandler(id)}>Delete</button>
                    


                {/* <button onClick={remove}>remove</button> */}

                </React.Fragment>
            )
        })
        
    }
    
    </>
)
}