import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom"
import { LOCAL_STORAGE_LOGGED_USER_KEY } from "./constants"
import { useNavigate } from 'react-router-dom'
import { useState} from "react"
import { useSelector } from "react-redux"
import{useDispatch} from "react-redux";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = (props) => {
    const { isLoggedin, user, setUser } = props;
    // const [ratingFilter, setRatingFilter] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutUser = () => {
        localStorage.setItem(LOCAL_STORAGE_LOGGED_USER_KEY, JSON.stringify({}))
        setUser({})
        navigate("/LoginPage")

    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(ratingFilter, "ratingFilter")
    
    // }
    
    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className='nav-item'><Link to="/Home">E-Commerce</Link></div>
                    <div className='nav-item'><Link to="/LoginPage">{isLoggedin ? "" : "Login"}</Link></div>
                    <div className='nav-item'><Link to="/SignUpPage">{isLoggedin ? "" : "Sign Up"}</Link> </div>
                    {/* <div className="nav-item">
                      
                      <input type="text" onChange={(event)=>setRatingFilter(event.target.value)} value={ratingFilter} />
                              
                    </div> */}
                    <div className="nav-item"><Link to="/AddProducts"><button> Add Products</button></Link></div>
                    <div className="nav-item-left" > {isLoggedin ? user.firstName : ""}</div>
                    <div className="nav-item-left" onClick={logOutUser}> {isLoggedin ? "Log Out" : ""} </div>


                    <div className="nav-item"><Link to="/Cart"><button> 
                    <Badge color="secondary">
                      <ShoppingCartIcon fontSize="large"/>{" "}
                    </Badge>
                     </button></Link></div>
               </div>
            </div>
        </>
    )

}
export default Navbar;



