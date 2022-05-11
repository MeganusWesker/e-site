import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer,productDetailsReducer,newReviewReducer, newProductReducer,deleteProductReducer,updateProductReducer,reviewReducer,productReviewsReducer,sendInquiryReducer } from './reducers/productReducer';
import {userReducer,profileReducer,forgotPasswordReducer, allUsersReducer,userDetailsReducer} from './reducers/userReducer';





const reducer = combineReducers({
   products:productReducer,
   productDetails:productDetailsReducer,
   user:userReducer,
   profile:profileReducer,
   forgotPassword:forgotPasswordReducer,
   newReview:newReviewReducer,
   newProduct: newProductReducer,
   deleteProduct:deleteProductReducer,
   updateProduct:updateProductReducer,
   allUsers: allUsersReducer,
   userDetails:userDetailsReducer,
   review:reviewReducer,
   productReviews:productReviewsReducer,
   inquiry:sendInquiryReducer,
});

let intialState ={
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
          shippingInfo: localStorage.getItem("shippingInfo")
          ? JSON.parse(localStorage.getItem("shippingInfo"))
          : {},
      },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;




