import {  NavLink, Outlet } from "react-router-dom"



export const Catagory=()=>{
        return(
            <>
            <h1>Catagories of products</h1>
            <NavLink to={"electronics"}>electronics</NavLink>
            <NavLink to={"jewellery"}> jewellery</NavLink>
            <Outlet/>
         
            </>            
        )
}