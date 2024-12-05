import { BOOKED_TICKETS } from "../action-type"




const initualstate={
    total_tickets:100,
    booked_tickets:20,
    hold_tickets:4
}

export const TicketReduser=(state=initualstate,action)=>{
    switch(action.type){
        case BOOKED_TICKETS:
            return { ...state, booked_tickets:state.booked_tickets + action.payload}
        default:
            return { ...state, booked_tickets:state.booked_tickets + 1}

    }
}


















// import { Booked_ticket } from "../action-type"




// const Initualstate={
//     Total_tickets:100,
//     Booked_tickets:20,
//     HOld_tickets:4
// }
// const TicketReduser=(state=Initualstate,action)=>{
//     switch(action.type){
//         case Booked_ticket:
//             return {...state,Booked_tickets:state.Booked_tickets+payload}
//         default:
//             return state
//     }
// }