import { useNavigate } from "react-router-dom"




export const Invalid_screen=()=>{
    const invalid=useNavigate()
    const pageHandler=()=>[
        invalid("/")
    ]
    return(
        <>
        <h1>Page not found</h1>
        <button onClick={pageHandler} >
            Go to home page
        </button>
        </>        
    )
}