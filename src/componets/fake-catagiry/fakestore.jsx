import { Component } from "react";
// import { < } from "./componets/button/button.jsx"
import { Button } from "../button/button";
import axios from "axios";
import { CustomDNALoader } from "../loder/loader";
import { CustomImage } from "../image/img";
import BootstrapCards from "../bootstrap/custom-card";






class FakeStore extends Component{
    state={
        prodets:[],
        loader:true

    }
    componentDidMount(){
        this.FetchOne()

    }
    FetchOne=async()=>{
        const {data}=await axios.get("https://fakestoreapi.com/products/")
        console.log(data)
        this.setState({
            prodets:data,
            loader:false
        })
    }
    

    render(){
        return(
            <>
           <h1>well come to page</h1>
            {/* <button ></button> */}
            {
                this.state.loader?<><CustomDNALoader/><h1>oops! </h1></>:<>
                {/* <h2>All catagiry products</h2> */}
                
                {
                    this.state.prodets.map(each=>{
                        return(
                            <div>
                                <BootstrapCards image={each.image} title={each.title} content={each.description}/>

                                {/* <h1>{each.title}</h1>
                                <CustomImage source={each.image}/> */}
                            </div>
                        )
                    })
                }
                </>
            }

            </>
        )
    }
}
export default FakeStore