import { BOOKED_TICKETS } from "../action-type"



export const BookedTickets=(qty)=>{
    return {
        action:BOOKED_TICKETS,
        payload:qty,
    };
};


//we should dispatch this in the react