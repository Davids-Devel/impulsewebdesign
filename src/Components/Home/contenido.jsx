import React from "react"
import "./contenido.css";

var Contenido = props => {
	return(
		<div>
			<div id="contenido2">
				<div>
					<div className={props.clase1}></div>
					<div className={props.clase2}></div>
					<div className={props.clase3}></div>
				</div>
			</div>
		</div>
	);
}
export default Contenido;