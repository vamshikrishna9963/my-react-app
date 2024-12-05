




export const initialisation={
    counter:0
}

// export const INCREAMENT="INCREAMENT"

export const Increament={
    type:"INCREAMENT"
}
export const ReducerFuntion=(state,action)=>{
        switch(action.type){
            case "INCREAMENT":
                return {...state,counter:state.counter+1}
        }
}