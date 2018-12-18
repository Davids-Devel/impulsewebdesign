import React, {Component} from "react";
import data from "../../assets/store.json";
import store from "../../Store/store";
import {addToCart} from "../../Store/actionCreators";

class StoreProducts extends Component {
	constructor(){
		super();
		this.state = {
			storeProducts:data,
			id:1,
			find:""
		}
		store.subscribe(()=> this.setState({find:store.getState().searchValue}));
		this.addToCart = this.addToCart.bind(this);
	}
	addToCart(name, price){
		store.dispatch(addToCart(this.state.id, price, name));
		this.setState({
			id:this.state.id + 1
		});
	}
	render(){
		var search = this.state.find;
		var products = this.state.storeProducts.map(({name, price, author, tags})=>{
			var template = <li>
				<div style={{border:"black solid 1px"}}>
					<h4>
						{name}
					</h4>
					<div>
						{price}$
					</div>
					<div>Autor {author}</div>
					<div>Tags: {tags.join(", ")}</div>
					<button onClick={()=>{this.addToCart(name, price)}}>Add to Cart</button>
				</div>
			</li>
			if (search) {
				console.log("Hay busqueda");
				var view = false;
				var splitSearch = search.toLowerCase().split(" ");
				tags.forEach(tag=>{
					let newData = tag.toLowerCase().split(" ");
					newData.forEach(splitTag=>{
						splitSearch.forEach( spliteSearchMapped =>{
							if (splitTag === spliteSearchMapped) {
								view = true;
							}
						});
					})
				})
				if (view){
					return template
				}
			}
			return template
		})
		var notFound = true;
		products.forEach(e=>{
			if (e) notFound = false;
		})
		if (notFound) {
			products = <div>No se consiguieron plantillas con el termino {this.state.find}</div>
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
export default StoreProducts