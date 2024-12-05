import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiUnderline } from 'react-icons/bi';
import { BsBackpack } from 'react-icons/bs';





export const Control_by_form=()=>{
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const [useError,setuse_error]=useState("")
    const [passError,setpassError]=useState("")
    const userUpdate=(event)=>{
        const userEnter=event.target.value
        setuserName(userEnter)
        console.log(userEnter)
        const error=userValidation(userEnter)
        console.log(error)
        if(error){
            setuse_error(error)
        }
        else{
            setuse_error("")
        }
    }
    const userValidation=(value)=>{
        let error=""
        const regular=/^vivo/i
        if(!value){
            error="enter your name"
        }
        else if(!regular.test(value)){
            error="Please enter valid vivo model"
        }
        return error
        
    }

    const passHandler=(event)=>{
        const Enterpass=event.target.value
        console.log(Enterpass)
        setpassword(Enterpass)
        const perror=passvalidations(Enterpass)
        if(perror){
            setpassError(perror)
        }
        else{
            setpassError("")
        }
    }

    const passvalidations=(value)=>{
        let perror=""
        if(!value){
            perror="please enter password"
        }
        else if(value.length>9 || value.length<4){
            perror="password must be more then 4 and less then 10 characters"
        }
        return perror
    }

    const onsubmit=(e)=>{
        e.preventDefault()
        if(useError || passError){
            alert("please fill the correct one")
        }
    }

    return(
        <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={userName} onChange={userUpdate} />
        </Form.Group>
        {
            useError?<span style={{color:"red"}}>{useError}</span>:""
        }
         

        
        {/* <h1>hello</h1> */}
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={passHandler}/>
        </Form.Group>
        {
            passError && <span style={{color:"red"}}>{passError}</span>
        }
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}