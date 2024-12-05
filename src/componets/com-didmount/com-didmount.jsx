import { Component } from "react";
import { CustomBall } from "../loder/loader";
import { CustomImage } from "../image/img";
import { InstaHeart } from "../heart/heart";
import Secondhead from "../headings/head";
import List, { OrderList } from "../list/list";
import axios from "axios";










class RecipesList extends Component{
    state={
        recipes:[],
        loader:true,
        error:false
    }
    componentDidMount(){
        // this.fechData()
        // console.log("hello world")
        this.fechData()
    }
    // fechData=async()=>{
    //     try{

    //     const response=await fetch("https://dummyjson.com/recipes")
    //     const {recipes}=await response.json()
    //     console.log(recipes)
    //     this.setState({
    //         recipes:recipes,
    //         loader:false
    //     })
    // }catch(err){
    //     console.error(err)
    //     this.setState({
    //         error:true
    //     })
    // }

    // }
        fechData=async()=>{
            const {status,data,na}=await axios.get("https://dummyjson.com/recipes")
            
           if(status==200){
            this.setState({
                recipes:data.recipes,
                loader:false
            })
           }
        }
    
    render(){
        return(
            <>
            
            <h1>Recipe Lists............</h1>
            {
                this.state.error?"error occur":this.state.loader
            }
            {
            this.state.loader?<CustomBall/>:
            <>
            <h3>wellcome</h3>
            
            {
               
                this.state.recipes.map(eachRec=>{
                    return(
                        <div>
                        <h2>{eachRec.name}</h2>
                        <CustomImage source={eachRec.image}></CustomImage>
                        <InstaHeart/>
                        <Secondhead text={ `Ingredients  ${eachRec.name}` }/>
                        {/* <h5>{eachRec.ingredients}</h5> */}
                        <List Items={eachRec.ingredients}/>
                        <OrderList Order={eachRec.instructions}/>
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
export default RecipesList