import React from 'react'
import "./style.css";
import{useDispatch} from "react-redux";
import { ACTION_TYPES } from './Redux/store';


function Cards({ product}) {
  const dispatch = useDispatch();

  return (
    <div className="box">
      <div className="content">
        <div className="data" key={product.id}>
          <p><img src={product.image} alt="card images" /></p>

          <h5>{product.title}</h5>
          <p>id: {product.id}</p>
          <p>Rating:{product.rating.rate}</p>
          {/* <p>description: {products.description}</p> */}
          {/* <p>Brand: {products.brand}</p> */}
          <p>price: {product.price}</p>
          {/* <p>category: {products.category}</p> */}
          
          
          <button id="cartbtn" onClick={()=>{
               dispatch({
                 type: ACTION_TYPES.ADD_TO_CART,   
                 payload: {
                  productId: product.id,
                 }
               })

          }}>Add to Cart</button>

          <button id="buybtn">Buy Now</button>

        </div>
      </div>
    </div>
  )
}

export default Cards;
