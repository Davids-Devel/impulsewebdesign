import React, {Component} from "react";

const back = "/static/Template-Store-Background.jpeg";

class Header extends Component {
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
					<style jsx>{`
	#store-header-main {
		text-align: center;
	}
	#store-header-main h1,
	#store-header-main h2{
		color: white;
		margin: 30px auto 70px auto;
	}
	#store-header-background {
		padding: 30px 0;
		height: 440px;
		background-size: 770px;
		background-position: center;
	}
	#storeSearchButton{
		background: none;
		border-radius: 100px;
		border:2px #087f23 solid;
		color: white;
		font-size: 18px;
		height: 30px;
		width: 100px;
		cursor: pointer;
	
		transition: ease .3s;
	}
	#storeSearchButton:hover {
		background: #087f23;
	}
	@media screen and (min-width: 480px){
		#store-header-main h1{
			margin: 50px auto 80px auto;
		}
		#store-header-main h2{
			margin: 80px auto 80px auto;
		}
	}
	@media screen and (min-width: 767px){
		#store-header-background {
			background-size: 980px;
		}
	}
	@media screen and (min-width: 980px){
			#store-header-background {
				background-size:cover;
			}
	}
`}</style>
				</div>
			</div>
		);
	}
}
export default Header;