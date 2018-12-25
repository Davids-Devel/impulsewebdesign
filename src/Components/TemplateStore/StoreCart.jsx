import React, {Component} from "react";
import "./StoreCart.css";
import store from "../../Store/store";
import {removeFromCart} from "../../Store/actionCreators";

class StoreCart extends Component {
	constructor(){
		super();
		this.state = {
			total:0,
			products:[],
			fixed:false,
			myProductsIsOpen:false
		}
		store.subscribe(()=> this.setState({total:store.getState().price, products:store.getState().products}));
		this.removePrice = this.removePrice.bind(this);
	}
	removePrice(price, id){
		store.dispatch(removeFromCart(id, price));
	}
	getScrollTop(){
		var scrollTop = document.documentElement.scrollTop;
		if (scrollTop > 500) {
			this.setState({
				fixed:true
			});
		} else {
			this.setState({
				fixed:false
			});
		}

	}
	componentDidMount(){
		window.onscroll = () => this.getScrollTop();
	}
	render(){
		var storeProducts = this.state.products;
		var data;
		if (storeProducts) {
			data = storeProducts.map(({name, price, id})=>{
				return (<li style={{border: "gray 1px solid", padding: "10px 0"}}>
					<span style={{textAlign:"center", display:"block", fontSize: "18px", color: "gray"}}>{name}</span>
					<span style={{textAlign: "center", width: "50%", display: "inline-block"}}>{price}$</span>
					<button onClick={()=>{this.removePrice(price, id)}}>Remove</button>
				</li>)
			})
			if(data.length === 0) {
				data = <li style={{textAlign:"center", listStyle:"none"}}><span>No Tienes Productos En Tu Carro</span></li>	
			}
		}
		let opacity 
		this.state.myProductsIsOpen ? opacity = 1 : opacity = 0;
		let position;
		let top;
		if(this.state.fixed){
			position = "fixed"; 
			top = "120px"
		} else {
			position = "absolute"; 
			top = "50px"; 
		}
		var myProductsStyles = {
			opacity,
			position,
			top
		}
		return (
			<div style={{position:"relative"}}>
				<div id="cart-main" style={this.state.fixed ? {position:"fixed", top:"70px"} : {position:"relative"}}>
					<button onClick={()=>this.setState({myProductsIsOpen:!this.state.myProductsIsOpen})}>Productos</button>	
					<h3>My Cart</h3>
					<span id="cart-total">Total: <span>{this.state.total === undefined ? 0:this.state.total}</span>$</span>
				</div>
				<div id="myProducts" style={myProductsStyles}>
					<ul style={{marginBottom:0}}>
						{data}
					</ul>
				</div>
			</div>
		);
	}
}
export default StoreCart