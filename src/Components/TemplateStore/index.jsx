import Header from "./StoreHeader";
import Cart from "./StoreCart";
import Products from "./StoreProducts";
import React, {Component} from "react";


class TemplateStore extends Component{
	constructor(){
		super();
		this.state = {
			id:1
		}
	}
	render(){
		return (
			<div>
				<Header/>
				<Cart/>
				<div style={{height:"1000px"}}>
					<Products search={this.props.location.search}/>
				</div>
			</div>
		);
	}
}
export default TemplateStore