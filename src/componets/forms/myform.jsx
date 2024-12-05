import { useRef, useState } from "react"
import axios from "axios"


export const Myform=()=>{
    const usernameRef=useRef("")
    const passwordRef=useRef("")
    const [FormErrors,setFormErrors]=useState({})
    const onsubmit=(e)=>{
        e.preventDefault()
        const userEnter=usernameRef.current.value
        const passwordEnter=passwordRef.current.value
        console.log(userEnter,passwordEnter)
        const FormErrors= validation(userEnter,passwordEnter)
        console.log(FormErrors)
        if(Object.keys(FormErrors).length>0){
        setFormErrors(FormErrors)

        }else{
            logApi(userEnter,passwordEnter)
        }
    }
    const validation=(username,password)=>{
        const FormErrors={}
        if(!username){
            FormErrors.userError="please Enter your name"
        }
        else if(username.length>20){
            FormErrors.userError="name must be less then 20 characters"
        }
        if(!password){
            FormErrors.passwordError="please Enter password"
        }
        if(password==="password" || password===username){
            FormErrors.passwordError="password not to password and username"
        }
        if(password.length<5){
            FormErrors.passwordError="password must be more then 6 letters"
        }
        return FormErrors
    }
    const logApi=async(username,password)=>{
        const response= await axios.post("https://dummyjson.com/auth/login",{
            "username": username,
            "password": password,  
             })
    }



    return(
        <>
  
  <div className="container">
    <h2>user Verification</h2>
    <form action="https://dummyjson.com/docs/users" onSubmit={onsubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your Full name"
          name="username"
          ref={usernameRef}
        />
      </div>
      <span style={{color:"red"}}>{FormErrors?.userError}</span>

      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pwd"
          ref={passwordRef}
        />
      </div>
      <span style={{color:"red"}}>{FormErrors?.passwordError}</span>
      <div className="checkbox">
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-default">
        Submit
      </button>
    </form>
  </div>
</>

    )
}