import React, {Component} from "react";
import store from "../../store/store";
import {removeFromCart} from "../../store/actionCreators";

class Cart extends Component {
	constructor(){
		super();
		this.state = {
			total:0,
			products:[],
			fixed:false,
			myProductsIsOpen:false
		}
		store.subscribe(()=> {
			this.setState({
				total:store.getState().storeReducer.price, 
				products:store.getState().storeReducer.products
			})
			console.log(store.getState().cartReducer)
		});
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
				return (<li key={"cart"+id} style={{border: "gray 1px solid", padding: "10px 0"}}>
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
				<style jsx>{`
	#cart-main {
		background: #f1f1f1;
		height: 50px;
		width: 100%;
	}
	#cart-main h3{
		text-align: center;
		width: all;
		margin: 11px auto;
		display: inline-block;
	}
	#cart-main #cart-total {
		float: right;
		padding: 15px 20px
	}
	#myProducts {
		position:absolute;
		top:50px;
		padding: 20px 5px;
		width: 80%;
		background: #f7f7f7;
		border-radius: 5px;
		box-shadow: 1px 1px 5px gray;
		transition: ease .3s;
	}
`}</style>
			</div>
		);
	}
}
export default Cart