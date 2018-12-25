import React from "react";
import "./404.css";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";

const noMatch = ({location}) => {
	return(
		<div id="not-found-container">
			<h1>404</h1>
			<span>La ruta <b>{location.pathname}</b> no se encuentra en este sitio.<br/>
				<Link to="/">Inicio</Link>
			</span>
			<img src={logo} alt=""/>
		</div>
	)
}
export default noMatch;