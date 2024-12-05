import { useState } from "react"
import { Tablecreate } from "../table1/table"


export const ControlState=()=>{
  const initialdata={
    model:"",
    mobile_number:"",
    select:""
  }
    const [formData,setformdata]=useState(initialdata)
    const [formError,setformerror]=useState({
    model1:"",
    mobile1:""
    })
    const [submitedData,setsubmitedData]=useState([])
     const onchangeHandler=(e)=>{
        // const enter=e.target.value
        // const tar=e.target.name
        // setformdata({formData})
        const {name,value}=e.target
        setformdata({...formData,[name]:value})
        console.log(name,value)
        // console.log(error)
        switch(name){
          case "model":
            const error=modelvalidate(value)
            console.log(error)
            if(error){
              setformerror(error)
            }else{
              setformerror("")
            }

            break;
          case "mobile_number":
            const errors=mobilevalidation(value)
            console.log(errors)
            if(errors){
              setformerror(errors)
            }else{
              setformerror("")
            }
            
        }
       
        
     }
     const modelvalidate=(er1)=>{
      let error=""
      let regular=/^samsung/i
      if(!er1){
        error="please enter model name"
      }
      else if(!regular.test(er1)){
        error="Enter the right model"
      }
      return error
     }
     const mobilevalidation=(dsd)=>{
       let errors=""
        if(!dsd){
          errors="please enter mobile number"
        }
        else if(dsd.length<4){
          errors="password must be less then 4"
        }
        return errors
     }
     const onsubmit=(e)=>{
      e.preventDefault()
      //for reuse of table we use following method
      //const new-form={
      //   data1:formData.model,
      //   data2:formData.mobile_number,
      // }

      if(formError){
        alert("please enter valid data")
      }
      
      else {
        setsubmitedData([...submitedData,formData])
      }
      setformdata(initialdata)
     }
    return(
      <>
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
          name="model"
         value={formData.model}
         onChange={onchangeHandler}
        />
            {
               formError.mobile1 && <span>{formError.mobile1}</span>
               
             }
   
      </div>
      <label htmlFor="mobile">Mobile Number:</label>

      <input
          type="text"
          className="form-control"
          id="mobile"
          placeholder="Enter your Full name"
          name="mobile_number"
           value={formData.mobile_number}
         onChange={onchangeHandler}
        />
         
             <select name="select" id="" value={formData.select} onChange={onchangeHandler}>
              <option value="telengana">telengana</option>
              <option value="ap">ap</option>
              <option value="tamilnadu">tamilnadu</option>
              <option value="kannada">kannada</option>

             </select>

            {
              // formError.mobileError  && <span>{formError.mobileError}</span>
             }
      
      </div>
    
      <button type="submit" className="btn btn-primary m-5">
    Submit
  </button>

   
      </form>
      <Tablecreate rowdata={submitedData}/>
      </>
    )
}