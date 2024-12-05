import { useContext } from "react"
import { GlobalChange } from "./navigation_stack"
import { Increament } from "./jshelper/jshelper"
import { useDispatch, useSelector } from "react-redux"
import { BookedTickets } from "../../redux/ticket/action"


export const Contactpage=()=>{

    const {currentState,dispatch}=useContext(GlobalChange)
    console.log(currentState)

    const changeHandler=()=>{
        dispatch(Increament)
    }
    const reducerFunction=useSelector(state=>state)
    console.log(reducerFunction);
    const dispatchFunction=useDispatch()
   
    return(
        <>

        <h1>Please contact us</h1>
        <h2>changes {currentState.counter}</h2>
        <button onClick={changeHandler}>click</button>
        <button onClick={()=>dispatchFunction(BookedTickets(3))}>bookedTickets</button>
        <h1>Total Tickets {reducerFunction.total_tickets}</h1>
        <h1>Booked Tickets{reducerFunction.booked_tickets}</h1>
        <h1>Hold Tickets {reducerFunction.hold_tickets}</h1>
        {/* <button onClick={dispatchss}>booked tickets</button> */}


        </>
    )
}