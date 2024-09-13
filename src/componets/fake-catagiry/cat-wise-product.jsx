import axios from "axios";
import { Component } from "react";
import { BiCategory } from "react-icons/bi";
import { CustomImage } from "../image/img";




export class FechCategory extends Component{

    state={
        products:[],
        catogory:[]
    }
    componentDidMount(){
        this.Allproducts()
        this.catogoryWise()
        document.title=`react app`
        }
    Allproducts=async()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products");
        if(status==200){
            this.setState({
                products:data
            })
        }
    }
    catogoryWise=async()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products/categories");

        if(status==200){
            this.setState({
                catogory:[...data,"All"]
            })
        }
    }
    catagirydata=(selectCat)=>{
        // console.log(selectCat)
        if(selectCat=="All"){
        this.Allproducts()
        }else{
        this.fetchproduct(selectCat)
        }
    }
    fetchproduct=async(select)=>{
        const {data,status}=await axios.get(`https://fakestoreapi.com/products/category/${select}`);
        console.log(data)
        if(status==200){
            this.setState({
                products:data

            })
        }
    }
    render(){
        return(
            <>

            {

                this.state.catogory.length>0  && <>
                {
                    this.state.catogory.map(each=>{
                        return(
                            <>
                            <button onClick={()=>this.catagirydata(each)} style={{color:"red"}} > {each}
</button>
{/* <button onClick={this.Allproducts}>clcik</button> */}
                            </>
                        )
                    })
                }
                </> 
            }
            {
                this.state.products.length>0 && <>
                {
                    this.state.products.map(each=>{
                        return(
                            <>
                            <h4>{each.title}</h4>
                            <CustomImage source={each.image}></CustomImage>
                            <h3>{each.category}</h3>
                            {/* <h5>{each.}</h5> */}
                            </>
                        )
                    })
                }
                </>
            }
            </>
        )
    }
}