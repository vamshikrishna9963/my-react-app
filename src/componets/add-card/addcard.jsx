import { Component } from "react"
import BootstrapCards from "../bootstrap/custom-card"
import { Button } from "react-bootstrap"
import { SuccessToast } from "../toast/toast"



{/* <h1>hello</h1> */}


export class AddCard extends Component{

    state={
        employee:[{name:"chinna",salary:10000},{name:"gopi",salary:10000}]
    }
    removeHandlerAll=(index)=>{
        // console.log(index)
        this.setState({
            employee:[]
        })
    }
    removeHandler=(index)=>{
        const filterData=this.state.employee.filter((_,id)=>id!==index)
        this.setState({
            employee:filterData
        })
    }

    clickHandler=()=>{    
        const Data={name:"vamshi",salary:"fontend"}
        const update=[...this.state.employee,Data]
        // SuccessToast("successfully complete","top-right")
        this.setState({
            employee:update,
            
        })
        confirm("do you want add new card")

    }

    render(){
        return(
            <>
            <Button variant="danger" onClick={this.clickHandler} >Add card</Button>
            <Button variant="danger m-2" onClick={this.removeHandlerAll} >Remove All card</Button>
 
            <div className="container m-5 ">
            <div className="row">
            {
                this.state.employee.length>0?
                this.state.employee.map((each,index)=>{
                    return(
                        <div key={index} >
     <div className="col-sm-4">
            <BootstrapCards title={each.name} content={each.salary} ind={index} removeHandler={this.removeHandler}/>
            </div>
                        </div>
                    )
                })
                : <h3>oops! No data found</h3>
            }
           
      
     
            </div>
            </div>
  

            </>
        )
    }
}