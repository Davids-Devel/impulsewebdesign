import React, {Component} from "react";
import back from "../../assets/Template-Store-Background.jpeg";
import "./StoreHeader.css";
import store from "../../Store/store";
import {addSearchValue} from "../../Store/actionCreators";

class StoreHeader extends Component {
	constructor(){
		super();
		this.state = {
			templateName:""
		}
	}
	getTemplateName({target}){
		this.setState({
			templateName:target.value
		});
	}
	findTemplate(){
		window.history.pushState("estado", "", `/store?q=${this.state.templateName}`);
	}
	render(){
		return (
			<div id="store-header-main">
				<div id="store-header-background" style={{backgroundImage:`url(${back})`}}>
				<h1 id="store-header-title">Impulse Web Design - Template Store</h1>
				<h2>Busca La Plantilla Que Necesitas.</h2>
				<input type="text" onChange={this.getTemplateName.bind(this)} placeholder="Plantilla"/>
				<button onClick={this.findTemplate.bind(this)} id="storeSearchButton">Buscar</button>
				</div>
			</div>
		);
	}
}
export default StoreHeader;