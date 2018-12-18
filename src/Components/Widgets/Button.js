import React from "react";
import "./Button.css";
import {Link} from "react-router-dom";

const Button = props => {
	return(
		<Link
		 className="buttonPersonal" 
		 to={props.redirectTo}
		 >
		{props.text}
		</Link>
	);
}

export default Button;