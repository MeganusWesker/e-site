import {ADD_TO_CART,REMOVE_CART_ITEM,SAVE_SHIPING_INFO  } from '../constants/cartConstants';
import axios from 'axios';


// add item to cart 
export const addItemsToCart = (id,quantity) => async (dispatch,getState)=>{
        const {data} = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: ADD_TO_CART,
            payload: {
              product: data.product._id,
              name: data.product.name,
              price: data.product.price,
              image: data.product.images[0].url,
              stock: data.product.stock,
              quantity,
            },
        });
 
        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

}

// remove form cart 
export const removeItemsFromCart= (id) => async (dispatch,getState)=>{
   dispatch({
     type:REMOVE_CART_ITEM,
     payload:id,
   })
   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const  saveShippingInfo= (data) => async (dispatch,getState)=>{

  dispatch({
    type:SAVE_SHIPING_INFO,
    payload:data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
}