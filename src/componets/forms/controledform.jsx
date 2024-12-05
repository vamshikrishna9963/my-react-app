import { useState } from "react"




export const Controls=()=>{

    const [userName,setuserName]=useState("")
    const[number,setnumber]=useState("")
    const [errors,seterrors]=useState("")
    
    const userChange=(even)=>{
        // error=""
        const Enterusesr=even.target.value
        setuserName(Enterusesr)
        console.log(Enterusesr)
        const error=nameValidation(Enterusesr)
        console.log(error)
        if(error){
            seterrors(error)
        }else{
            
            seterrors("")
        }


    }
    const nameValidation=(value)=>{
        let error=""
        const regular=/[^samsung]/i
        if(!value){
            error="please Enter name"
        }else if(!regular.test(value)){
            error="please enter the correct model"
        }
        return error

    }
    
    const numberChange=(event)=>{
        const Enternumber=event.target.value
        setnumber(Enternumber)
        console.log(Enternumber)
        const numError=numValidation(Enternumber)
        console.log(numError)
        if(numError){
            setnumber(numError)
        }

    }
    const numValidation=(value)=>{
        let numError=""
        // const regnum=/^[6-9][0-9]{9}$/
        if(!value){
            numError="please enter number"
        }
        return numError
    }

    const onsubmit=(event)=>{
        event.preventDefault()
        if(errors){
            alert("please fill properly")
        }
        else{

        }
    }

    return(
    <form action="https://dummyjson.com/docs/users" onSubmit={onsubmit}>

        <div className="container">
    <h2>user Verification</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your Full name"
          name="username"
          value={userName}
          onChange={userChange}
        />
             {
                errors && <span>{errors}</span>
             }
   
      </div>
      <input
          type="text"
          className="form-control"
          id="mobile"
          placeholder="Enter your Full name"
          name="mobile"
          value={number}
          onChange={numberChange}
        />
      </div>


      <label htmlFor="mobile">Mobile Number:</label>
      
      <button type="submit" className="btn btn-primary">
    Submit
  </button>
      </form>

    )
}