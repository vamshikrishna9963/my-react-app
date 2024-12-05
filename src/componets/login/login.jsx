import { CustomImage } from "../image/img"


const Login=({isAdmin=false,text})=>{
    const color={backgroundColor:"yellow"}
//    if(isAdmin){
    return(
        <>
        {/* {isAdmin?<CustomImage source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLptopW9KxDeuWO-1QnDreTnLXpLrDQytbQ&s"}/>:"nothing"} */}

        <h3>Wellcome {isAdmin?"user":"adimi"}</h3>
        <h2 style={color}>{text}</h2>
        </>
    )
// }
}
export default Login