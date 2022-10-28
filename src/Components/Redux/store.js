import { configureStore } from "@reduxjs/toolkit";
import { ActionTypes } from "../constants";


const INITIAL_STATE = {
  products: [],
  filter: [],
  cart: [],
  selectedProduct: null,
}

const store = configureStore({
  reducer: (state, action) => {

    const { type, payload } = action;
    
    switch (type) {
    
        case ActionTypes.SET_PRODUCTS:
          return { ...state, products: payload };

        case ActionTypes.ADD_NEW_PRODUCTS:
          return { ...state, products: [...state.products, payload] };

        case ActionTypes.SELECTED_PRODUCT:
          return { ...state, selectedProduct: payload };

        case ActionTypes.ADD_TO_CART:
            console.log(state.cart)
           return { ...state, cart: [...state.cart.filter(item=>item.id !==payload.id), { ...payload, quantity: 1 }] };
  
        case ActionTypes.UPDATE_CART:
          return {
            ...state, cart: payload,
          };
        case ActionTypes.DELETE_FROM_CART:
          return{
            ...state,cart:[...state.cart.filter(item=>item!==payload)]
          }

        default:
        break;

    }

    return INITIAL_STATE;

  },
});

export default store;
