import React, {Component} from "react";
import {Link} from "react-router-dom"; 

var UserSuccess = () => {
	return(
		<div>
			<div>
				<h1>Hurra!!!</h1>
				<h2>Verificacion exitosa, ahora puede <Link to="/login">iniciar sesion</Link></h2>
			</div>
		</div>
	)
}
export default UserSuccess;