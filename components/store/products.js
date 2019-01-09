import React, {Component} from "react";
import store from "../../store/store";
import {addToCart} from "../../store/actionCreators";

class Products extends Component {
	constructor(){
		super();
		this.addToCart = this.addToCart.bind(this);
		this.cartId = 0;
	}
	addToCart(id, name, price){
		store.dispatch(addToCart(this.cartId++, price, name));
	}
	render(){
		let {storeProducts, search} = this.props;
		let products;
		if (storeProducts.length > 1) {
			products = storeProducts.map(({name, price, author, tags, id}) => (
				<li key={id}>
					<div style={{border:"black solid 1px"}}>
						<h4>
							{name}
						</h4>
						<div>
							{price}$
						</div>
						<div>Autor {author}</div>
						<div>Tags: {tags.join(", ")}</div>
						<button onClick={()=>{this.addToCart(id, name, price)}}>Add to Cart</button>
					</div>
				</li>)
			);
		} else {
			if (search) products = <div>No se consiguieron plantillas con el termino {search}</div>
			else products = <div>No hay plantillas para mostrar</div>
		}
		return(
			<div>
				<ul>
					{products}
				</ul>
			</div>
		);
	}
}
export default Products