import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "./homescreen"
import { AboutScreen } from "./aboutscreen"
import { createContext, useEffect, useReducer, useState } from "react"
import { NavBar } from "./navbar/navbar"
import { Contactpage } from "./contactsc"
import UseEffectExaple from "../useeffenthook/useEffect"
import Greeting from "../greetings/greeting"
import { UseEffect_Dom } from "../useeffenthook/dom"
import { Invalid_screen } from "./invalidscreen"
import { Catagory } from "./category"
import { Electronics } from "./electronics"
import { Jewellery } from "./jewellery"
import { Products } from "./products"
import { Details } from "./detailsscreen"
import { initialisation, ReducerFuntion } from "./jshelper/jshelper"
import useAxios from "../customHook/customHook"



 export const Userdata=createContext()

 export const GlobalChange=createContext()


export const Navigation_stack=()=>{
    const [user,setuser]=useState("vamshi")
    const[theme,settheme]=useState(true)
    const[salary,setsalary]=useState(10000)

    const [product,error,loading]=useAxios("https://fakestoreapi.com/products")

    const themHandler=()=>{
        settheme(!theme)
    }
    const salHandler=()=>{
        setsalary(salary+10000)
    }

    const[currentState,dispatch]=useReducer(ReducerFuntion,initialisation)

    useEffect(()=>{
        document.title="navigation"
    },[])
    if(loading){
        return <h1>loading.....</h1>
    }
    return(
        <GlobalChange.Provider value={{
            currentState,
            dispatch
        }}>
        <Userdata.Provider value={{
            user:"vamshi",
            theme:theme,
            salary:salary,
            themHandler,
            salHandler
        }}>
<div className={`bg-${theme ? "yellow":"light"}`}>
        <NavBar/>
        
        <Routes>
            <Route path="" element={<HomeScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
            <Route path="/category" element={<Catagory/>}>
            <Route index element={<Electronics/>}/>

                <Route path="electronics" element={<Electronics/>}/>
                <Route path="jewellery" element={<Jewellery/>}/>
            </Route>
            <Route path="products/" element={<Products/>}/>
            <Route path="products/:productId" element={ <Details/> } />


            <Route path="/*" element={<Invalid_screen/>}/>
        </Routes>
       
        </div>
        </Userdata.Provider>
        </GlobalChange.Provider>
        
    )
}