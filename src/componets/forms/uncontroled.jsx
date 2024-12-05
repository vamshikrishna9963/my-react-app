import axios from "axios"
import { useRef, useState } from "react"
import { PiPasswordFill } from "react-icons/pi"



 export const UncontrolledForm=()=>{
    const useref=useRef("")
    const passwordref=useRef("")
    const [FormError,setFormError]=useState({})
    const onSubmit=(event)=>{
        event.preventDefault()
        const userEnterd=useref.current.value
        const passworEnterd=passwordref.current.value
        console.log(userEnterd)
        const FormError=validation(userEnterd,passworEnterd)
        console.log(FormError)
        if(Object.keys(FormError).length>0){
          setFormError(FormError)
        }else{
          logApi(userEnterd,passworEnterd)
        }
    }
    const validation=(username,password)=>{
      const FormError={ }
      if(!username){
        FormError.userError="please enter user name"
      }
      else if(username.length>20){
        FormError.userError="user name must be less then 20 characters"
      }
      if(!password){
        FormError.passwordError="please enter password"
      }
      else if(password.length<6){
        FormError.passwordError="password must be more then 6 characters"
      }
    
      return FormError;
     

    }
    const logApi=async(username,password)=>{
      try{

      
      const response= await axios.post("https://dummyjson.com/auth/login",{
        "username":username,
        "password": password,
    
      })
      console.log(response)
      // return response
    }catch(err){
      console.log(err)
    }
    }
  

    return(
<form action="/action_page.php" onSubmit={onSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="username" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      placeholder="Enter username"
      name="username"
      
      ref={useref}
    />
    <span style={{color:"red"}}>{FormError?.userError}</span>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      
      ref={passwordref}
    />
    <span style={{color:"red"}}>{FormError?.passwordError}</span>
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
    )
}