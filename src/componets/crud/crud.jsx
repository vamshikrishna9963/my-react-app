import { Fragment, useState } from "react"



const CrudExample=()=>{

    const [todos,setTodos]=useState([])
    const [input,setInput]=useState('')
    const [selectItem,setSelectItem]=useState(null)
    const inputChange=(e)=>{
        const enter=e.target.value
        
        if(enter){
            setInput(enter)
        }

    }
    
    const deleteHandler=(ind)=>{
        const updated=todos.filter((_,index)=>index !=ind)
        setTodos(updated)
    }

    const updataEvent=(e)=>{
        e.preventDefault()
        const copytodos=[...todos]
        copytodos[selectItem]=input
        setTodos(copytodos)
        setInput("")
        setSelectItem(null)
        
    }

    const updateHandler=(ind)=>{
        setSelectItem(ind)
        const value=todos[ind]
        setInput(value)
        
    }

    const addTodo=(e)=>{
        e.preventDefault()
        if(input){
            setTodos([...todos,input])
        }
        // if(input){
            setInput("")
        // }
        
    
        
    }
    return(
        <>
        <h1>crud Example</h1>

        <form onSubmit={ selectItem ? updataEvent : addTodo}>
            <input type="text" value={input} onChange={inputChange} />
            <button type="submit" style={{backgroundColor:"red"}}>{selectItem || selectItem === 0 ? "update Todo" : "Add todo" }</button>
        </form>
        {
            todos?.map((each,index)=>< Fragment key={index} >
                
                <h1>{each}</h1>
                <button onClick={()=>deleteHandler(index)}>delete</button>
                <button onClick={()=>updateHandler(index)}>update</button>
            </Fragment>)
        }
       </>
    )
}
export default CrudExample