import { Component } from "react";
import { TbReceiptRupee } from "react-icons/tb";
import { InstaHeart } from "../heart/heart";
import BootstrapCards from "../bootstrap/custom-card";
// import {CustomToast} from "../toast/toast";
// import { SuccessToast } from "../toast/toast";






class YoutubeButton extends Component{

    state={
        count:0
    }
    clickHandler=()=>{
        this.setState({
            count:this.state.count+6
        },()=>{
            // <CustomToast/>
            // SuccessToast(`count of the ${this.state.count}`,"top-right")
        })
        this.clickHandler2=()=>{
            this.setState({
                count:this.state.count-1
            })
        }
        
    }
    clickHandler3=()=>{
        this.setState({
    count:0
        })
    }
    render(){
        return(
            <>
            <h1>count {this.state.count}</h1>
            <button onClick={this.clickHandler}>increase</button>
            {/* <div>1</div> */}
            
                <button onClick={this.clickHandler2}>Decrement</button>
                <button onClick={this.clickHandler3}>reset</button>

            
            {
            // this.state.isSub?<BootstrapCards/>:"please subscribe my channel"
        }
        </>
        )
        
    }

}
export default YoutubeButton