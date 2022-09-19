import React from 'react';
import {useState} from "react";
import {Navigate, useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import {Link} from "react-router-dom"
import {LOCAL_STORAGE_USERS_KEY} from "./constants";
import updateInputValue from './Utils/general';
import {                 
  firstNameValidation,
  lastNameValidation,
  emailValidations,
  passwordValidations,
} from "./validations";


function SignUpPage(props){
  const[firstName, setFirstName] = useState("")
  const[lastName, setlastName] = useState("")
  const[email ,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[errorMessage, setErrorMessage] = useState(null);
  
 const navigate = useNavigate()
 const handleSubmit = (event) =>{
  event.preventDefault()

  const validationResultForFirstName = firstNameValidation(firstName)
  const validationResultForLastName = lastNameValidation(lastName)
  const validationResultForEmail= emailValidations(email)
  const validationResultForPassword = passwordValidations(password)
 
  if(validationResultForFirstName.result === false){
     setErrorMessage(validationResultForFirstName.message)
  }else if(validationResultForLastName.result === false){
    setErrorMessage(validationResultForLastName.message)
  }else if(validationResultForEmail.result === false){
    setErrorMessage(validationResultForEmail.message)
  }else if(validationResultForPassword.result === false){
    setErrorMessage(validationResultForPassword.message)
 }else{
  let userList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY))
   userList = userList === null ? [] : userList;
  localStorage.setItem(LOCAL_STORAGE_USERS_KEY,JSON.stringify([...userList,{
      firstName,
      lastName,
      email,
      password,

 }]));   

 setFirstName("")
 setlastName("")
 setEmail("")
 setPassword("")
 navigate("/LoginPage")
 } 
 }

  return(
    <> 
    <div className="signup-page">
   
      <div className="signup-content">
      <h2 className="heading">Sign Up</h2>
        <p className="warning">{errorMessage}</p>
      
       <div className="input-details">
          <label>First Name</label>
          <input type="text" id="firstName" value={firstName}  onChange={(event)=>{
            updateInputValue(event,setFirstName)
          }}/>
       </div>

       <div className="input-details">
          <label>Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(event)=>{
            updateInputValue(event,setlastName)
          }}/>
       </div>
         
        <div className="input-details">
            <label>Email Address</label>
            <input type="email" id="email" value={email} onChange={(event)=>{
              updateInputValue(event,setEmail)
            }}/>
        </div>
        
        <div className="input-details">
            <label>Password</label>
          <input type="password" id="password" value={password} onChange={(event)=>{
            updateInputValue(event,setPassword)
          }}/>
            
        </div>
      
       <button type="submit" id='submit' onClick={handleSubmit}>Submit</button>
    
       <p className="signin-para">Already registered?<Link to="/LoginPage">Signin</Link></p> 
      </div>
    </div>
    </>
  )

}
export default SignUpPage;
