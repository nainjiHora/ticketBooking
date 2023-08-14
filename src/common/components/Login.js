import React from 'react';
import './login.css';
import { useState } from 'react';
import {  useNavigate,Link } from "react-router-dom";
import Header from "../Header";
import { useEffect } from 'react';

function Login(){
  
  
  let users=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]
   var navigate= useNavigate()
  var [email,setEmail]=useState("")
  var [password,setPassword]=useState("")
  var[error,setError]=useState(false)


useEffect(()=>{
  if(window.location.pathname=="/logout"){
    localStorage.removeItem("userData")
  }
},[])


var checkUser=()=>{


  

  let flag=false
  users.forEach(element => {
    if((email==element.email && password==element.password)){
      flag=true
      localStorage.setItem("userData",JSON.stringify({email:email}))
  setError(false)
  setTimeout(()=>{navigate("/book")},2000)
    }
   
  });

  if(!flag){
    setError(true)
  }
}

    return (
    <>
    
      
      <h1>Login Details:-</h1> 
     

        <label>E Mail:</label>
        <input type='email' placeholder='Enter your mail' onInput={(e)=>{setEmail(e.target.value)}} ></input><br/><br/>

        <label>Password:</label>
        <input type='password' placeholder='Enter your password' onInput={(e)=>{setPassword(e.target.value)}}></input><br/><br/>
        
        <button onClick={(e)=>checkUser()}>Submit</button>
      {error &&<span className='error' >Invalid Input</span>}

      <Link to="/register"><button>Register NEW user</button></Link>
    </>
    )
}

export default Login;