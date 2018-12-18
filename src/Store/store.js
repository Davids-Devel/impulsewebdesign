import { createStore } from "redux";

const reducer = (state, action) =>{
    switch (action.type) {
        case "LOGIN":
            return{
                displayName:action.displayName,
        		email:action.email,
        		emailVerified:action.emailVerified,
        		photoURL:action.photoURL,
        		isAnonymous:action.isAnonymous,
        		uid:action.uid,
        		providerData:action.providerData,
        		login:action.login
            }
        case "AUTHENTICATED":
        	return{
        		authenticated:action.authenticated
        	}
        case "SET_APP":
            return {
                app:action.app
            }
        case "SET_REGISTER_COUNT":
            return {
                count:action.count
            }
        case "ADD_TO_CART":
            let prevPrice = state.price;
            var products = state.products;
            if (products) {
                products.push(action.product);
            } else {
                products = new Array(action.product)
            }
            if (prevPrice !== undefined) {
                return {
                    ...state,
                    price:action.price + prevPrice,
                    products:products,
                }
            } else {
                return {
                    ...state,
                    price:action.price,
                    products:products,
                }
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
        case "ADD_SEARCH_VALUE":
            return {
                ...state,
                searchValue:action.searchValue,
            }
        default: break;
    }
    return state;
}

export default createStore(reducer);