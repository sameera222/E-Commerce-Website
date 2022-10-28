import { ActionTypes } from "../constants";

export const setProduct = (products) => {
return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products
}
};

export const filterProduct = (products) =>{
    return{
        type:ActionTypes.FILTER_PRODUCTS,
        payload:products
    }
};

export const addNewProduct = (products) =>{
    return{
        type:ActionTypes.ADD_NEW_PRODUCTS,
        payload:products
    }
};

export const addToCart = (productId) =>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:productId
    }
}

export const deleteFromCart = (product) =>{
    return{
        type:ActionTypes.DELETE_FROM_CART,
        payload:product
    }
}
export const selectedProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const updateCart = (updatedCart) =>{
    return{
        type:ActionTypes.UPDATE_CART,
        payload:updatedCart
    }
}
