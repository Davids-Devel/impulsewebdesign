import { createStore, combineReducers } from "redux";
let cartInitialState = {
    price:0,
    products:[]
}
const storeReducer = (state = cartInitialState, action) => {
  switch(action.type) {
      case "ADD_TO_CART":
            return {
                ...state,
                price:action.price + state.price,
                products:state.products.concat([action.product]),
            }
        case "REMOVE_FROM_CART":
            var newProducts = state.products.filter((e)=>{
                return e.id !== action.product.id
            })
            return {
                ...state,
                price:state.price - action.price,
                products:newProducts,
            }
        default: return state;
    }
}
let accountInitialState = {
    displayName:"",
    email:"",
    emailVerified:"",
    photoURL:"",
    uid:"",
    login:""
}
const accountReducer = (state = accountInitialState, action) =>{
    switch (action.type) {
        case "LOGIN":
            return{
                displayName:action.displayName,
        		email:action.email,
        		emailVerified:action.emailVerified,
        		photoURL:action.photoURL,
        		uid:action.uid,
        		login:action.login
            }
        case "AUTHENTICATED":
        	return{
        		authenticated:action.authenticated
        	}
        case "SET_REGISTER_COUNT":
            return {
                count:action.count
            }
        case "ADD_SEARCH_VALUE":
            return {
                ...state,
                searchValue:action.searchValue,
            }
        default: return state;
    }
}
let reducer = combineReducers({
    storeReducer,
    accountReducer
});

export default createStore(reducer);