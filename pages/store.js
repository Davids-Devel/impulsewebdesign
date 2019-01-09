import React, {Component} from "react";
import Header from "../components/store/header";
import Cart from "../components/store/cart";
import Products from "../components/store/products";

class TemplateStore extends Component {
	render(){
		let {search, products} = this.props;
		return (
			<div>
				<Header/>
				<Cart/>
				<div style={{height:"1000px"}}>
					<Products storeProducts={products || []} search={search}/>
				</div>
			</div>
		);
	}
}
export default TemplateStore