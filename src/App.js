import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Navbar from './Components/Pages/Navbar';
import SignUpPage from './Components/Pages/SignUpPage';
import LoginPage from './Components/Pages/LoginPage';
import AddProducts from "./Components/Pages/AddProducts";
import ProductDetails from "./Components/Pages/productDetails";
import Cart from "./Components/Pages/Cart";
import {LOCAL_STORAGE_LOGGED_USER_KEY} from './Components/constants';
import { fetchAllProducts } from "./API/products";
import { setProduct } from "./Components/Redux/ProductAction";
import{useDispatch, useSelector} from "react-redux";
import "./App.css";


function App() {
   const [isLoggedin, setIsLoggedin] = useState(false);
   const [user, setUser] = useState({});
   const dispatch = useDispatch();
   
   //This useEffect checks user loggedin or not
   useEffect(() =>{
         if(Object.keys(user).length > 0){
            setIsLoggedin(true);
         }else{
            setIsLoggedin(false);
         }
   },[user]);

    
   useEffect(() =>{
   console.log("Effect Called")
   const loggedInUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGGED_USER_KEY))
   if(loggedInUser && Object.keys(loggedInUser).length > 0){
      setUser(loggedInUser);
      setIsLoggedin(true);
   }
  },[]);
  
  //Products are fetched from React-redux
   useEffect(()=>{
   const result = fetchAllProducts();
    result.then((response) => {
      const allProducts = response.data;
      dispatch(setProduct(allProducts));
    });
    console.log("Effect Fetching Data")
   }, [dispatch]);


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
         <Route path = "*" element={<h1>404 page not found</h1>}/>
         <Route path="/product/: productId" element={<ProductDetails/>}/>
      </Routes>
     </Router>     
   </div>

  );
}
export default App; 
  

  