import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { LOCAL_STORAGE_LOGGED_USER_KEY } from "../constants";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { filterProduct, setProduct } from "../Redux/ProductAction";


const Navbar = (props) => {
    const { isLoggedin, user, setUser } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector((state) => {
        return state.products;
      });
    
      const cartProducts = useSelector((state) => {
        return state.cart;
      });
    
  
    //Log out user
    const logOutUser = () => {
        localStorage.setItem(LOCAL_STORAGE_LOGGED_USER_KEY, JSON.stringify({}))
        setUser({})
        navigate("/LoginPage")
    }
    
    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className='nav-item'><Link to="/Home">E-Commerce</Link></div>
                    <div className='nav-item'><Link to="/LoginPage">{isLoggedin ? "" : "Login"}</Link></div>
                    <div className='nav-item'><Link to="/SignUpPage">{isLoggedin ? "" : "Sign Up"}</Link> </div>
                    <div className="nav-item"><Link to="/AddProducts">{isLoggedin ? "Add Products" :"" }</Link></div>
                    <div className="nav-item-left">{isLoggedin ? user.firstName : ""}</div>
                    <div className="nav-item-left" onClick={logOutUser}> {isLoggedin ? "Log Out" : ""} </div>
                    <div className="nav-item">
                      {isLoggedin?
                      <Link to="/Cart">
                        <Badge color="secondary">
                           <ShoppingCartIcon fontSize="large"/>{" "}
                        </Badge>        
                        <span className="badge badge-warning" id='lblCartCount'>{cartProducts.length}</span> 
                      </Link> 
                      :
                      " "
                    }
                    </div>
               </div>
            </div>
        </>
    )

}
export default Navbar;



