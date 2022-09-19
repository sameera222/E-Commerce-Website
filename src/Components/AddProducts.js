import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import {ACTION_TYPES} from "./Redux/store";

function AddProducts(props) {
    // const[productImage, setProductImage] = useState("");
    // const[productTitle, setProductTitle] = useState("");
    // const[productId, setProductId] = useState("");
    // const[productRating, setProductRating] = useState("");
    // const[productDescription, setProductDescription]= useState("");
    // const[productBrand, setProductBrand] = useState("");
    // const[productPrice, setProductPrice] = useState("");
    // const[productCategory, setProductCategory] = useState("");
    const [productField, setProductField] = useState({
        
        productId: "",
        productTitle: "",
        productRating: "",
        // productDescription: "",
        // productBrand: "",
        productPrice: "",
        // productCategory: "",
    });

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setProductField({ ...productField, [event.target.name]: event.target.value });
    }
    console.log(productField);

    return (
        <>
            <div>

                <div>
                    <label>Product ID</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productId} name="productId"></input>
                </div>
                <div>
                    <label>Product Title:</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productTitle} name="productTitle" />

                </div>
                <div>
                    <label>Product Price</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productPrice} name="productPrice" />
                </div>

                <div>
                    <label>Product Rating</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productRating} name="productRating"></input>

                </div>

                {/* <div>
                    <label>Product Description</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productDescription} name="productDescription"></input>
                </div> */}

                {/* <div>
                    <label>Product Brand</label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productBrand} name="productBrand"></input>
                </div> */}

                {/* <div>
                    <label>Product category </label>
                    <input type="text" onChange={(event) => handleChange(event)} value={productField.productCategory} name="productCategory"></input>
                </div> */}

                <div>
                    <button type="button" onClick={()=>{
                        dispatch({
                            type: ACTION_TYPES.ADD_PRODUCTS,
                            payload: {
                                id: productField.productId, 
                                title: productField.productTitle,
                                price:productField.productPrice,
                                rate:productField.productRating,
                               

                            }
                        })
                       
                    }}>Add Product</button>
                </div>

            </div>
        </>
    )
}

export default AddProducts;

