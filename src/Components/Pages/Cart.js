import React, {useState, useEffect} from 'react'
// import Cards from "./Cards"
import { useSelector, useDispatch } from "react-redux"
import { deleteFromCart, updateCart } from "../Redux/ProductAction";
import "./Cart.css";


const Cart = ()=> {   
  const [cartProducts, setCartProducts] = useState();
  // const[total, setTotal] = useState();
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => {
    return state.cart;
  });
  console.log(cartProduct, "products in cart");

  function updateProductQuantity(id, quantity, products) {
    const updatedProducts = JSON.parse(JSON.stringify(products));
    const indexToUpdate = updatedProducts.findIndex((product)=> product.id === id);
    console.log(updatedProducts[indexToUpdate], "index");
    updatedProducts[indexToUpdate].quantity = quantity > 0 ? quantity : 1;
    return updatedProducts;
  }
    
  useEffect(() => {
    setCartProducts(cartProduct);
  }, [cartProduct]);

  const handleQtyIncrement = (product)=>{
    const increaseQuantity = updateProductQuantity(
      product.id,
      product.quantity + 1,
      cartProducts,
    );
    dispatch(updateCart(increaseQuantity));
  }

  const handleQtyDecrement = (product)=>{
    const decreaseQuantity = updateProductQuantity(
      product.id,
      product.quantity - 1,
      cartProducts,
    );
    dispatch(updateCart(decreaseQuantity));

  }
  return (
    <>
      <div className="container">
        {cartProduct.length === 0 ? (
          <div className="cart-product-available">No Cart Products Available</div>
        ) :
          (
            cartProduct.map((product) => {
              return (
                <>
                  <div className="cart-box">
                    <div className="cart-content">
                      <div className="cart-data" key={product.id}>
                        <p><img src={product.image} alt="card images" /></p>
                        <h5>{product.title}</h5>
                        <p>id: {product.id}</p>
                        <p>price: {product.price}</p>
                        <div>
                          {" "}
                          <span>
                            {product.quantity} X {product.price} ={" "}
                            {product.quantity * product.price}{" "}
                          </span>
                        </div>
                        <p>Quantity:
                          <button id="buybtn" onClick={() => {
                             handleQtyIncrement(product)
                          }}>+ </button>

                          <span className="product-quantity">{product.quantity}</span>

                          <button id="buybtn" onClick={() => {
                            handleQtyDecrement(product)
                          }}>-</button>

                        </p>
                        <button id="remove-btn"  onClick={() => {
                           dispatch(deleteFromCart(product));
                           }}
                        >Remove Item</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          )}
      </div>
    </>
  )
}
export default Cart;






