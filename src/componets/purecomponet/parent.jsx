import { PureComponent } from "react";
import { Child } from "./child";




export class Parent extends PureComponent{
    constructor(){
        super()
        this.state={
            isIndia:false,
        }
    }
    onchange=()=>{
        this.setState({
            isIndia:!this.state.isIndia
        })
    }
    render(){
        console.log("parent....")
        return(
            <>
            {
                this.state.isIndia?"your indian":"your not indian"
            }
            <button onClick={this.onchange}>change the country</button>
            <Child></Child>

            </>
        )
    }
}