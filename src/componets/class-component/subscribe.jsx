import { Component } from "react";
import { GiH2O } from "react-icons/gi";
import YoutubeButton from "./youtube-button";
import { CustomBall } from "../loder/loader";




class Subscribe extends Component{
    state={
        issubscribe:false,
        text1:"subscribe",
        text2:"subscribed"
    }
    clickHandler=()=>{
        this.setState({
            issubscribe:!this.state.issubscribe
        })
    }
    render(){
        return(
            <>
            <button onClick={this.clickHandler}>{this.state.issubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.issubscribe?<><YoutubeButton /><CustomBall/></>:<h4>Please subscribe my channel</h4>
            }
            </>
        )
    }
}
export default Subscribe

