import { configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: [],
  cart: {},
   
}

export const ACTION_TYPES = {
  ADD_PRODUCTS: "add-products",
  ADD_TO_CART: "add-to-cart",
  UPDATE_CART: "update-cart",
}


const store = configureStore({
  reducer: (state, action) => {

    const { type } = action;
    //  products.reducer
    const { payload } = action;


    switch (type) {
      case "products-fetched":
        console.log(action, "this is dispatched action")
        const products = payload;

        return {
          ...state,
          products,

        }

      case ACTION_TYPES.ADD_PRODUCTS:
        const { id, title, price, rate } = payload;
        console.log(action, "this is dispatched action of new product")


        return {
          ...state,
          products: [...state.products, { id, title, price, rating: { rate }, }]
        }

      case ACTION_TYPES.ADD_TO_CART:
        const { productId, quantity} = payload;

        return {
          ...state,
           cart: {...state.cart, [productId]: 1 }
         
        }

      case ACTION_TYPES.UPDATE_CART:
        const { cartProducts } = payload;
        return {
          ...state,
          cart: cartProducts,
        }

      default:
      break;

    }

    return INITIAL_STATE;

  },
});

export default store;
