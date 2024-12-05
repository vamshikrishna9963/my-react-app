
import { NavLink } from "react-router-dom"
import "./App.css"
import { useContext } from "react"
import { Userdata } from "../navigation_stack"

export const NavBar=()=>{
  
  const {theme} =useContext(Userdata)
    return(
        <ul className={`nav bg-${theme ? "dark":"light"} `} >
  
  <li className="">
    <NavLink to={"/"} className="active1">HOME</NavLink>
  </li>
  <li className="">
    <NavLink to={"/about"} className="active1" >ABOUT</NavLink>
  </li>
  <li className="">
    <NavLink to={"/contact"} className="active1">CONTACT US</NavLink>
  </li>
  <li className="">
    <NavLink to={"/category"} className="active1"> CATEGORY</NavLink>
  </li>
  <li className="">
    <NavLink to={"/products"} className="active1"> PRODUCTS</NavLink>
  </li>
  
</ul>

    )
}