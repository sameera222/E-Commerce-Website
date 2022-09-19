import React from 'react'
import { useEffect, useState } from "react"
import Cards from "./Cards"
import { useSelector } from "react-redux"
import { ACTION_TYPES } from './Redux/store'
import { useDispatch } from "react-redux"


function Cart() {

  function updateProductQuantity(id, quantity, products) {
    const updatedProducts = JSON.parse(JSON.stringify(products));
    const indexToUpdate = updatedProducts.findIndex((product)=> product.id === id);
    updatedProducts[indexToUpdate].quantity = quantity > 0 ? quantity : 1;
    return updatedProducts
  }

  const [cartProducts, setCartProducts] = useState([])
  const[total, setTotal] = useState();

  const dispatch = useDispatch();

  const{products, cart}= useSelector((state) => {
    console.log("products in selector in Cart", state.cart)
    return {
      products: state.products,
      cart : state.cart
    }
     
      // products: state.products,    

  })
  

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      if (cart[product.id]){
        return true;
      }
       
      return false;
        
    }) 
    setCartProducts(filteredProducts)
    console.log(cart, "in useEffect");
    
    
  }, [cart, products]);

  
  const subTotal = cartProducts.reduce(
    (total, product) => total + product.price + product.quantity,
    0
  )
  useEffect(()=>{
       setTotal(subTotal)
  },[subTotal])
  

  const handleQtyIncrement = (product)=>{
    const updateProducts = updateProductQuantity(product.id, product.quantity + 1, cartProducts)
    console.log(updateProducts)
    setCartProducts(updateProducts)
    dispatch({
      type: ACTION_TYPES.UPDATE_CART,
      payload: {
        cartProducts: updateProducts,
      }
    })
  }

  const handleQtyDecrement = (product)=>{
    const updateProducts = updateProductQuantity(product.id, product.quantity - 1, cartProducts)
    setCartProducts(updateProducts);

    dispatch({
      type: ACTION_TYPES.UPDATE_CART,
      payload: {
        cartProducts: updateProducts,
      }
    })
  }
  return (
    <>

      <div className="container">
        {cartProducts.length === 0 ? (
          <div>No Products Available</div>
        ) :
          (

            cartProducts.map((product) => {
              return (
                <>
                  <div className="box">
                    <div className="content">
                      <div className="data" key={product.id}>
                        <p><img src={product.image} alt="card images" /></p>

                        <h5>{product.title}</h5>
                        <p>id: {product.id}</p>
                        {/* <p>Rating:{product.rating.rate}</p> */}
                        <p>price: {product.price}</p>
            
                        <p>Quantity:

                          <button id="buybtn" onClick={() => {
                             handleQtyIncrement(product)
                          }}>+ </button>
                         <h4>{product.quantity}</h4>
                          <button id="buybtn" onClick={() => {
                            handleQtyDecrement(product)
                          }}>-</button>
                        </p>

                        <button id="buybtn">Remove Item</button>

                      </div>
                    </div>
                  </div>
                </>

              )
            })
          )}

      </div>

      <div>
        <p>Your Total is: {total}</p>
      </div>


    </>
  )
}
export default Cart;






