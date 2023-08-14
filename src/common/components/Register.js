import React from "react";
import './register.css';
import Header from "../Header";
import { useState } from "react";
import { json } from "react-router-dom";

function Register(){
let users=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [cPassword,setCPassword]=useState("")

function saveUser(){
 if(password==cPassword && name!="" && email!="" && password!="")
  { 
    let user ={
    name:name,
    email:email,
    password:password
  }
users.push({...user})
localStorage.setItem("users",JSON.stringify(users))
setName("")
setCPassword("")
setEmail("")
setPassword("")
}
}

    return(
    <>
    <Header></Header>
    <div className="RegisterForm">
    <h1>Registration Page</h1>
      <label className="RegisterLabel">Name:</label>
        <input type="text" placeholder="Enter Your Name" onInput={(e)=>setName(e.target.value)}/><br/><br/>


        <label className="RegisterLabel">E Mail:</label>
        <input type='email' placeholder='Enter your mail' onInput={(e)=>setEmail(e.target.value)}></input><br/><br/>

        <label className="RegisterLabel">Create Password:</label>
        <input type='password' placeholder='Enter your password' onInput={(e)=>setPassword(e.target.value)}></input><br/><br/>

        <label className="RegisterLabel">Confirm Password:</label>
        <input type='password' placeholder='Enter your password' onInput={(e)=>setCPassword(e.target.value)}></input><br/><br/>

        <button onClick={(e)=>{saveUser()}}>Submit</button>
      </div>
    </>
    )
}

export default Register;