import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import AddProducts from "./Components/AddProducts";
import Cart from "./Components/Cart";
import {LOCAL_STORAGE_LOGGED_USER_KEY} from './Components/constants';
import { fetchAllProducts } from "./API/products";
import{useDispatch} from "react-redux";


function App() {
   const [isLoggedin, setIsLoggedin] = useState(false)
   const [user, setUser] = useState({})
   const dispatch = useDispatch()
  
   useEffect(() =>{
         if(Object.keys(user).length > 0){
            setIsLoggedin(true)
         }else{
            setIsLoggedin(false)
         }
   },[user]);


   useEffect(() =>{
   console.log("Effect Called")
   const loggedInUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGGED_USER_KEY))
   if(loggedInUser && Object.keys(loggedInUser).length > 0){
      setUser(loggedInUser)
      setIsLoggedin(true)
   }
   
   fetchAllProducts().then((response)=>{
       const products = response.data;
       console.log(products, "products are fetched on App");

       dispatch({
         type: "products-fetched",
         payload:
            products,         
       })
      
   })
   },[dispatch]);

  return (
   <div className="App">
     <Router>  
     <Navbar setUser={setUser} isLoggedin={isLoggedin} user={user} />
     <Routes> 
         <Route path="/Home" element={<Home />}/>
         <Route path="/SignUpPage" element={<SignUpPage/>}/>
         <Route path="/LoginPage" element={<LoginPage setUser={setUser} setIsLoggedin={setIsLoggedin}/>}/>  
         <Route path="/AddProducts" element={<AddProducts/>}/>
         <Route path="/Cart" element={<Cart/>}/>
      </Routes>
     </Router>     
   </div>

  );
}
export default App; 
  

  