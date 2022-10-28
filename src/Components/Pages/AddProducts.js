import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addNewProduct} from "../Redux/ProductAction";


const AddProducts = () => {
    const [productField, setProductField] = useState({
        productId: "",
        productTitle: "",
        productRating: "",
        productPrice: "",
       
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setProductField({ ...productField, [event.target.name]: event.target.value });
    }
    console.log(productField);

    const handleClick = () =>{
        dispatch(addNewProduct(productField));
    
    setProductField({
        productId: "",
        productTitle: "",
        productRating: "",
        productPrice: "",
       
    })
        navigate("/Home");
    }

 return (
    <> 
     <div className="product-add-container">
    <div className="add-products">
          <h2 className= "product-heading">Add Products</h2>  
        <div className="main-product" >
            <label className="product-detail">Product ID</label>
            <input 
            type="text" 
            onChange={(event) => handleChange(event)} 
            value={productField.productId} 
            name="productId"
            className="product-input"></input>
        </div>
        <div className="main-product">
            <label className="product-detail">Product Title:</label>
            <input type="text"
            className="product-input"
            onChange={(event) => handleChange(event)}
             value={productField.productTitle} 
             name="productTitle" />

        </div>
        <div className='main-product'>
            <label className="product-detail">Product Price</label>
            <input type="text" 
            className="product-input"
            onChange={(event) => handleChange(event)} value={productField.productPrice} name="productPrice" />
        </div>

        <div className='main-product'>
            <label className="product-detail">Product Rating</label>
            <input type="text" 
            className="product-input"
            onChange={(event) => handleChange(event)} value={productField.productRating} name="productRating"></input>

        </div>

        <div>
            <button 
            type="button" 
            onClick={()=>{handleClick()}}
            id="btnAddProduct">Add Product</button>
        </div>

    </div>
    </div>
    </>
 )
}

export default AddProducts;

