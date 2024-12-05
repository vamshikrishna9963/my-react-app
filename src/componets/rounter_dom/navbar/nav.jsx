import { Route, Routes } from "react-router-dom"
import { HomeScreen } from "../homescreen"
import { AboutScreen } from "../aboutscreen"


const Navgations=()=>{
    return(
        <>
        <Routes>
            {/* <Route path="/" element={<HomeScreen/>}/> */}
            {/* <Route path="/about" element={<AboutScreen/>}/> */}
        </Routes>
        </>
    )
}
export default Navgations