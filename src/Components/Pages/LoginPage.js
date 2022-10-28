import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.css';
import { LOCAL_STORAGE_USERS_KEY } from "../constants";
import updateInputValue from "../Utils/general";
import {emailValidations} from '../Utils/validations';
import {LOCAL_STORAGE_LOGGED_USER_KEY} from '../constants'


const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(null)
  const {setUser} = props;
  const navigate = useNavigate() 
   
   //Validations for Email and Password 
    const handleSubmit = (event) =>{
      const validateResultForEmail = emailValidations(email)
      if(validateResultForEmail.result === false){
        setValidationError(validateResultForEmail.message)  
      }else{
        const userList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
        const result = userList.find((user) => {
         return user.email === email && user.password === password;
        });

        if(result){
         console.log("Login successful")
          setUser(result)
          localStorage.setItem(LOCAL_STORAGE_LOGGED_USER_KEY,JSON.stringify(result))
          navigate("/Home")
        }else{
          alert("invalid user")
        }     
     }
    }

 return (
    <>
    <div className='login-content'>
      <div className="login-details">
        <h1 className="login-heading">Sign In</h1>
          <p className="warning">{validationError}</p>
           <div className="input-details">
              <label>Email Address</label>
              <input type="email" id="email" value={email} onChange={(event) => {
                updateInputValue(event, setEmail)
              }} />
            </div>

          <div className="input-details">
             <label>Password</label>
            <input type="password" id="password" value={password} onChange={(event) => {
              updateInputValue(event, setPassword);
            }} />
          </div>

          <div className="input-details">
            <label><input type='checkbox'/>Remember</label>
          </div>

          <button type="submit" id='submit' onClick={handleSubmit}>Submit</button>
            <p className="forgot">
                Don't have an account?
              <Link to="/SignUpPage">
                  SignUp now
              </Link>
            </p>
        </div>
      </div>
    </>
  )
}
export default LoginPage;

