//  import "./App.css"
 
//  import 
 
 export const Secondhead=(props)=>{
    const {text}=props
    return(
        <h2 style={{color:"red"}}>{text}</h2>
    )
}
export default Secondhead

export const Mainhead=(props)=>{
    const {Headings,children}=props
    return(
        <>
          {children}
        <h1 className="div1">{Headings}</h1>
      
        </>
    )
}

