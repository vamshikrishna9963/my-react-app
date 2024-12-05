import "./color.css"
import "../../css.css"
const Greeting=(props)=>{
    const {text,children}=props
    return(
        <div className="Card">
        <h1 className="text">Good Morning {children} {text}</h1>
        <h3>How Can I Assist You</h3>
        </div>
        
    )
}
export default Greeting