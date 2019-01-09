import React, {Component}from "react";
import UserConfig from "./config"

class Tab extends Component{
	constructor(){
		super();
 	}
	render() {
		let templates
		switch(this.props.tab) {
			case "sold":
				break;
			case "buyed":
				break;
			case "config":
				templates = <UserConfig/>
				break;
			default:
				templates = <h2>Bienvenido.</h2>
				break;
		}
		return(
			<div>{templates}</div>
		)
	}
}
export default Tab;