const login = ({displayName, email, emailVerified, photoURL, isAnonymous, uid, providerData}) =>{
	return{
		type: "LOGIN",
		displayName,
		email,
		emailVerified,
		photoURL,
		isAnonymous,
		uid,
		providerData,
		login:true
	}
}
const authenticated = ({authenticated}) => {
	return {
		type: "AUTHENTICATED",
		authenticated
	}
}
const addToCart = (id, price, name) =>{
	return {
		type:"ADD_TO_CART",
		price,
		product:{
			id,
			name,
			price
		}
	}
}
const removeFromCart = (id, price)=>{
	return {
		type:"REMOVE_FROM_CART",
		price,
		product:{
			id,
		}
	}
}
const addSearchValue = (searchValue)=>{
	return {
		type:"ADD_SEARCH_VALUE",
		searchValue
	}
}
export { login, authenticated, addToCart, removeFromCart, addSearchValue };